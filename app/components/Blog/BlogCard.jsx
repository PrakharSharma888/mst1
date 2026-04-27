'use client';

import React, { useState, useEffect } from 'react';
import { motion } from 'framer-motion';

// ===== API CONFIG =====
const CMS_URL = "https://cms.mstblockchain.com";
const BLOG_API = `${CMS_URL}/api/blogs?populate=*&sort=createdAt:desc&pagination[start]=0&pagination[limit]=10000`;

export default function MSTBlogSection() {
  const [blogs, setBlogs] = useState([]);
  const [loading, setLoading] = useState(true);
  const [currentIndex, setCurrentIndex] = useState(0);
  const [itemsPerPage, setItemsPerPage] = useState(3);

  useEffect(() => {
    const updateItemsPerPage = () => {
      setItemsPerPage(window.innerWidth < 768 ? 1 : 3);
    };
    updateItemsPerPage();
    window.addEventListener('resize', updateItemsPerPage);
    return () => window.removeEventListener('resize', updateItemsPerPage);
  }, []);

  useEffect(() => {
    const fetchBlogs = async () => {
      try {
        const response = await fetch(BLOG_API, {
          headers: {
            "accept": "application/json",
          },
          method: "GET"
        });
        const result = await response.json();

        if (result.data) {
          const formattedBlogs = result.data.map(item => {
            const category = (item.category || 'TECH UPDATES').toUpperCase();

            let imageUrl = 'https://images.unsplash.com/photo-1639762681485-074b7f938ba0?auto=format&fit=crop&q=80&w=800';
            if (item.cardImage?.url) {
              imageUrl = `${CMS_URL}${item.cardImage.url}`;
            }

            return {
              id: item.id,
              category: category,
              date: item.createdAt
                ? new Date(item.createdAt).toLocaleDateString('en-US', { month: 'short', day: 'numeric' }).toUpperCase()
                : 'OCT 24',
              title: item.heading || 'SCALING STRUCTURAL PURITY',
              excerpt: item.subHeading || 'Discover the latest updates from MST Network.',
              image: imageUrl,
              slug: item.slug
            };
          });
          setBlogs(formattedBlogs);
        }
      } catch (error) {
        console.error("Error fetching blogs:", error);
      } finally {
        setLoading(false);
      }
    };

    fetchBlogs();
  }, []);

  const goLeft = () => {
    setCurrentIndex((prev) => (prev > 0 ? prev - 1 : prev));
  };

  const goRight = () => {
    setCurrentIndex((prev) => (prev + itemsPerPage < blogs.length ? prev + 1 : prev));
  };

  // Get current slice
  const visibleBlogs = blogs.slice(currentIndex, currentIndex + itemsPerPage);

  return (
    <section id="blog" className="relative w-full overflow-hidden bg-white text-black py-24 px-6">

      {/* 🔴 BACKGROUND LAYER */}
      <motion.div
        animate={{ rotate: [0, 360] }}
        transition={{ duration: 90, repeat: Infinity, ease: 'linear' }}
        className="absolute top-[-35%] left-[-85%] w-[170%] h-[170%] border-[0.5px] border-black/5 rounded-full hidden lg:flex pointer-events-none z-0"
      />
      <motion.div
        animate={{ rotate: [360, 0] }}
        transition={{ duration: 60, repeat: Infinity, ease: 'linear' }}
        className="absolute top-[0%] -left-[35%] w-[110%] h-[110%] border-[0.5px] border-red-300 rounded-full hidden lg:flex pointer-events-none z-0"
      />
      <motion.div
        animate={{ y: [-15, 15, -15], x: [-10, 10, -10], rotate: [0, 90, 0] }}
        transition={{ duration: 8, repeat: Infinity, ease: 'linear' }}
        className="absolute -top-5 -left-10 w-24 h-24 border border-red-500 rounded-full flex items-center justify-center opacity-40 z-0"
      >
        <div className="w-16 h-16 border border-red-500/20 rounded-full" />
        <div className="absolute w-1.5 h-1.5 bg-red-500 rounded-full shadow-[0_0_10px_#ff2d2d] top-0" />
      </motion.div>

      {/* CONTENT */}
      <div className="max-w-7xl mx-auto relative z-10">

        {/* HEADER */}
        <div className="flex flex-col md:flex-row justify-between items-start md:items-end mb-10 sm:mb-12 md:mb-16 gap-4 sm:gap-6">
          <motion.h2
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            className="bungee-regular text-3xl sm:text-4xl md:text-6xl leading-tight tracking-tight text-black font-extrabold uppercase"
          >
            LATEST{" "}
            <span className="text-red-600">
              BLOGS
            </span>
          </motion.h2>

          {/* NAV BUTTONS */}
          <div className="flex items-center gap-3">
            <NavButton direction="left" onClick={goLeft} />
            <NavButton direction="right" onClick={goRight} />
          </div>
        </div>

        {/* BLOG GRID */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-10 ">
          {loading ? (
            // SKELETON LOADING
            [1, 2, 3].map((n) => (
              <div key={n} className="animate-pulse flex flex-col">
                <div className="aspect-[16/10] w-full bg-gray-200 rounded-lg mb-8" />
                <div className="h-4 w-24 bg-gray-200 rounded mb-4" />
                <div className="h-8 w-full bg-gray-200 rounded mb-4" />
                <div className="h-16 w-full bg-gray-200 rounded mb-8" />
                <div className="h-12 w-32 bg-gray-200 rounded-full" />
              </div>
            ))
          ) : (
            <div className="md:contents flex flex-col items-center">
              {visibleBlogs.map((post, idx) => (
                <BlogCard key={post.id} post={post} index={idx} />
              ))}
              {/* MOBILE ONLY NAVIGATION INDICATORS */}
              <div className="flex lg:hidden items-center gap-2 mt-8">
                {blogs.map((_, i) => (
                  <div
                    key={i}
                    className={`h-1.5 rounded-full transition-all duration-300 ${i === currentIndex ? 'w-6 bg-red-600' : 'w-2 bg-gray-300'
                      }`}
                  />
                ))}
              </div>
            </div>
          )}
        </div>
      </div>
    </section>
  );
}

// ===== SUB-COMPONENTS =====
function BlogCard({ post, index }) {
  return (
    <motion.article
      initial={{ opacity: 0, y: 30 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ delay: index * 0.1, duration: 0.5 }}
      viewport={{ once: true }}
      className="group cursor-pointer flex flex-col w-full max-w-sm mx-auto md:max-w-none border-red-500/10 md:border-transparent border rounded-2xl p-4 md:p-0"
    >
      {/* IMAGE */}
      <div className="relative aspect-[16/10] w-full overflow-hidden mb-8 border border-black/5 rounded-lg bg-gray-100">
        <div className="absolute inset-0 bg-red-600/10 opacity-0 group-hover:opacity-100 transition-opacity duration-500 z-10" />
        <div className="absolute inset-0 bg-gradient-to-t from-black/30 via-transparent to-transparent opacity-60 z-10" />
        <motion.img
          src={post.image}
          alt={post.title}
          width={500}
          height={500}
          className="object-fit w-full h-full md:grayscale group-hover:grayscale-0 group-hover:scale-105 transition-all duration-700 ease-out rounded-lg"
          onError={(e) => {
            e.target.src = 'https://images.unsplash.com/photo-1639762681485-074b7f938ba0?auto=format&fit=crop&q=80&w=800';
          }}
        />
      </div>

      {/* META */}
      <div className="flex items-center gap-3 mb-4">
        <span className="text-red-600  text-xs tracking-[0.2em] font-bold">
          {post.category}
        </span>
        <div className="h-1 w-1 rounded-full bg-black/20" />
        <span className="text-gray-500  text-xs font-medium uppercase">
          {post.date}
        </span>
      </div>

      {/* TITLE */}
      <h3 className=" bungee-regular text-3xl font-bold mb-4 tracking-tight group-hover:text-red-500 transition-colors duration-300 leading-[1.1] line-clamp-2">
        {post.title}
      </h3>

      {/* EXCERPT */}
      <p className="text-gray-700 text-sm leading-relaxed mb-5 sm:mb-8 line-clamp-2">
        {post.excerpt}
      </p>

      {/* CTA BUTTON */}
      <div className="mt-auto">
        <motion.a
          href={`/blog/${post.slug || post.id}`}
          whileHover={{ scale: 1.05 }}
          whileTap={{ scale: 0.95 }}
          className="inline-block px-5 sm:px-6 py-2.5 sm:py-3 rounded-full bg-black text-white text-sm font-bold uppercase tracking-wider shadow-lg hover:brightness-110 transition-all duration-300 hover:bg-red-500"
        >
          Read More
        </motion.a>
      </div>
    </motion.article>
  );
}

function NavButton({ direction, onClick }) {
  return (
    <motion.button
      whileHover={{ scale: 1.05 }}
      whileTap={{ scale: 0.95 }}
      onClick={onClick}
      className="w-10 h-10 sm:w-14 sm:h-14 flex items-center justify-center border border-black/10 hover:border-red-600/50 hover:bg-red-600/5 transition-all group"
    >
      {direction === 'left' ? (
        <svg className="w-5 h-5 sm:w-6 sm:h-6 text-gray-500 group-hover:text-red-600 transition-colors" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M15 19l-7-7 7-7" />
        </svg>
      ) : (
        <svg className="w-5 h-5 sm:w-6 sm:h-6 text-gray-500 group-hover:text-red-600 transition-colors" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9 5l7 7-7 7" />
        </svg>
      )}
    </motion.button>
  );
}