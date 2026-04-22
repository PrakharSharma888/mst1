'use client';

import Image from 'next/image';
import Link from 'next/link';
import { AnimatePresence, motion } from 'framer-motion';
import { ChevronRight } from 'lucide-react';
import { useEffect, useLayoutEffect, useRef, useState } from 'react';
import {
  FiBookOpen,
  FiCode,
  FiCpu,
  FiDroplet,
  FiEye,
  FiGlobe,
  FiGrid,
  FiLink,
  FiLock,
  FiSearch,
  FiTool,
  FiUsers,
  FiZap
} from 'react-icons/fi';

const navItems = [
  { label: 'Build', href: '#', active: true },
  { label: 'Learn', href: '#', active: false },
  { label: 'Products', href: '#', active: false },
  { label: 'Usecases', href: '#', active: false }
];

const usecases = [
  { id: '01', title: 'On-Chain Certificate', link: 'On-Chain-Certificate' },
  { id: '02', title: 'Supply Chain Transparency', link: 'Supply-Chain-Transparency' },
  { id: '03', title: 'Tokenized Real Estate', link: 'Tokenized-Real-Estate' },
  { id: '04', title: 'Insurance Automation', link: 'Insurance-Automation' },
  { id: '05', title: 'NFT Ticketing', link: 'NFT-Ticketing' },
  { id: '06', title: 'Carbon Credit Tracking', link: 'Carbon-Credit-Tracking' },
  { id: '07', title: 'Charity & Donations', link: 'Charity-&-Donations' },
  { id: '08', title: 'Decentralized Social Platforms', link: 'Decentralized-Social-Platforms' },
  { id: '09', title: 'Decentralized Voting', link: 'Decentralized-Voting' },
  { id: '10', title: 'Digital Asset Exchange', link: 'Digital-Asset-Exchange' },
  { id: '11', title: 'Digital Identity KYC', link: 'Digital-Identity-KYC' },
  { id: '12', title: 'Education Credentials', link: 'Education-Credentials' },
  { id: '13', title: 'Enterprise Workflow Automation', link: 'Enterprise-Workflow-Automation' },
  { id: '14', title: 'Freelance Marketplace', link: 'Freelance-Marketplace' },
  { id: '15', title: 'Gaming Asset Ownership', link: 'Gaming-Asset-Ownership' },
  { id: '16', title: 'Gold Commodity Tokenization', link: 'Gold-Commodity-Tokenization' },
  { id: '17', title: 'Healthcare Records', link: 'Healthcare-Records' },
  { id: '18', title: 'Land Records', link: 'Land-Records' },
  { id: '19', title: 'Loyalty Rewards', link: 'Loyalty-Rewards' },
];

const buildResources = [
  {
    title: 'DEVELOPER RESOURCES',
    items: [
      { label: 'Testnet', href: 'https://mstscan.com/' },
      { label: 'Faucet', href: 'https://faucet.mstblockchain.com/' },
      { label: 'Developer Docs', href: 'https://docs.mstblockchain.com/developer-docs' },
      { label: 'MST Explorer', href: 'https://mstscan.com/' }
    ]
  },
  {
    title: 'SUPPORT & PROGRAMS',
    items: [
      { label: 'Grant Program', href: '/learn/grant' },
      { label: 'Developer Support Forum', href: 'https://future.forem.com/mst-chain' },
      { label: 'Personalized Dev Support', href: 'https://docs.google.com/forms/d/110LC2GOehrGDeeCPFgOn6486kZLekhhZIJd8X7nINO8/viewform?edit_requested=true' }
    ]
  }
];

const learnResources = [
  {
    title: 'BLOCKCHAIN',
    items: [
      { label: 'Block Validation Process', href: '/learn/Block-validation' },
      { label: 'DAO & MST Chain', href: '/learn/dao' },
      { label: 'No Code Fractional Validator', href: '/learn/fractional-validator' },
      { label: 'Solidity : EVM Programming Language', href: '/learn/solidity' },
      { label: 'Transparency', href: '/learn/tranpernaency' }
    ]
  }
];

const learnHighlights = {
  title: 'HIGHLIGHTS',
  label: 'LATEST TWEET',
  placeholder: 'Tweet content coming soon'
};

const productsResources = [
  {
    name: 'BridgeKey',
    description: 'Cross-chain asset bridging',
    href: 'https://bridgekey.io/'
  },
  {
    name: 'MST Buddy',
    description: 'Developer assistant toolkit',
    href: 'https://buddy.mstblockchain.com/'
  },
  {
    name: 'MasterStroke Accademy',
    description: 'Seamless Web3 payments',
    href: 'https://masterstroke.academy/'
  }
];

const panelMotion = {
  initial: { opacity: 0, y: 20, scale: 0.95 },
  animate: { opacity: 1, y: 0, scale: 1 },
  exit: { opacity: 0, y: 20, scale: 0.95 }
};

const containerVariants = {
  hidden: {},
  show: {
    transition: {
      staggerChildren: 0.05,
      delayChildren: 0.06
    }
  }
};

const itemVariants = {
  hidden: { opacity: 0, x: -10 },
  show: { opacity: 1, x: 0 }
};

function MegaMenuItem({ href, label, description, icon: Icon, prefix }) {
  const isExternal = href?.startsWith('http');
  return (
    <motion.li variants={itemVariants}>
      <Link
        href={href}
        className="group flex items-center justify-between gap-4 rounded-xl px-3 py-2.5 text-left text-sm font-medium text-white transition-all duration-300 hover:bg-red-500/10 hover:text-red-400"
        {...(isExternal ? { target: "_blank", rel: "noopener noreferrer" } : {})}
      >
        <span className="flex min-w-0 items-center gap-3 text-left">
          {Icon ? (
            <span className="inline-flex h-7 w-7 flex-none items-center justify-center rounded-lg border border-white/10 bg-white/5 text-red-500/90 transition-colors duration-300 group-hover:text-red-400">
              <Icon className="h-4 w-4" />
            </span>
          ) : null}

          <span className="min-w-0 text-left">
            <span className="flex items-center gap-2 text-left">
              {prefix ? (
                <span className="text-[10px] font-extrabold uppercase tracking-[0.18em] text-red-500/90">
                  {prefix}
                </span>
              ) : null}
              <span className="block truncate transition-transform duration-300 group-hover:translate-x-1 text-left">
                {label}
              </span>
            </span>

            {description ? (
              <span className="mt-1 block text-xs font-normal text-white/55 transition-transform duration-300 group-hover:translate-x-1 group-hover:text-white/70 text-left">
                {description}
              </span>
            ) : null}
          </span>
        </span>

        <ChevronRight
          size={16}
          className="flex-none text-white/25 transition-all duration-300 group-hover:translate-x-1 group-hover:text-red-400"
        />
      </Link>
    </motion.li>
  );
}

function HighlightCard({ highlight }) {
  if (!highlight) return null;

  const isExternal = highlight.href?.startsWith('http');
  const CardWrapper = highlight.href ? Link : 'div';
  const HighlightIcon = highlight.icon;

  return highlight.href ? (
    <Link
      href={highlight.href}
      className="group block rounded-2xl border border-red-500/20 bg-gradient-to-b from-red-900/25 to-black/95 p-5 shadow-[0_0_40px_rgba(255,0,0,0.12)] transition-all duration-300 hover:border-red-500/35 hover:bg-gradient-to-b hover:from-red-900/35 hover:to-black"
      {...(isExternal ? { target: "_blank", rel: "noopener noreferrer" } : {})}
    >
      <div className="flex items-start justify-between gap-4">
        <div className="min-w-0">
          <p className="text-[10px] font-extrabold uppercase tracking-[0.22em] text-red-500">
            {highlight.eyebrow}
          </p>
          <p className="mt-2 text-sm font-extrabold text-white">{highlight.title}</p>
          {highlight.description ? (
            <p className="mt-2 text-xs leading-relaxed text-white/65">{highlight.description}</p>
          ) : null}
        </div>

        {HighlightIcon ? (
          <span className="inline-flex h-9 w-9 flex-none items-center justify-center rounded-xl border border-white/10 bg-white/5 text-red-400/90 transition-all duration-300 group-hover:bg-red-500/10">
            <HighlightIcon className="h-5 w-5" />
          </span>
        ) : null}
      </div>

      {highlight.cta ? (
        <div className="mt-4 inline-flex items-center gap-2 text-xs font-bold uppercase tracking-[0.18em] text-white/80 transition-colors duration-300 group-hover:text-white">
          <span className="transition-transform duration-300 group-hover:translate-x-0.5">{highlight.cta}</span>
          <span className="text-white/40 transition-transform duration-300 group-hover:translate-x-1">→</span>
        </div>
      ) : null}
    </Link>
  ) : (
    <div className="group block rounded-2xl border border-red-500/20 bg-gradient-to-b from-red-900/25 to-black/95 p-5 shadow-[0_0_40px_rgba(255,0,0,0.12)] transition-all duration-300 hover:border-red-500/35 hover:bg-gradient-to-b hover:from-red-900/35 hover:to-black">
      <div className="flex items-start justify-between gap-4">
        <div className="min-w-0">
          <p className="text-[10px] font-extrabold uppercase tracking-[0.22em] text-red-500">
            {highlight.eyebrow}
          </p>
          <p className="mt-2 text-sm font-extrabold text-white">{highlight.title}</p>
          {highlight.description ? (
            <p className="mt-2 text-xs leading-relaxed text-white/65">{highlight.description}</p>
          ) : null}
        </div>

        {HighlightIcon ? (
          <span className="inline-flex h-9 w-9 flex-none items-center justify-center rounded-xl border border-white/10 bg-white/5 text-red-400/90 transition-all duration-300 group-hover:bg-red-500/10">
            <HighlightIcon className="h-5 w-5" />
          </span>
        ) : null}
      </div>

      {highlight.cta ? (
        <div className="mt-4 inline-flex items-center gap-2 text-xs font-bold uppercase tracking-[0.18em] text-white/80 transition-colors duration-300 group-hover:text-white">
          <span className="transition-transform duration-300 group-hover:translate-x-0.5">{highlight.cta}</span>
          <span className="text-white/40 transition-transform duration-300 group-hover:translate-x-1">→</span>
        </div>
      ) : null}
    </div>
  );
}

function MegaMenu({
  menuId,
  widthClass = 'w-[980px] max-w-[calc(100vw-2rem)]',
  sections,
  highlight,
  leftScrollable = false,
  leftMaxHeightClass = 'max-h-[420px]',
  align = 'center',
  anchorRef,
  positionStrategy = 'absolute',
  offsetY = 16,
  viewportMargin = 16,
  onMouseEnter,
  onMouseLeave
}) {
  const panelRef = useRef(null);
  const [anchoredStyle, setAnchoredStyle] = useState(null);

  const alignmentClass =
    align === 'left'
      ? 'left-0 translate-x-0'
      : align === 'right'
        ? 'right-0 left-auto translate-x-0'
        : 'left-1/2 -translate-x-1/2';

  useLayoutEffect(() => {
    if (positionStrategy !== 'fixed') return;
    if (!anchorRef?.current) return;

    let rafId = null;

    const updatePosition = () => {
      const anchorRect = anchorRef.current?.getBoundingClientRect();
      const panelEl = panelRef.current;
      if (!anchorRect || !panelEl) return;

      const panelWidth = panelEl.offsetWidth || panelEl.getBoundingClientRect().width;
      const panelHeight = panelEl.offsetHeight || panelEl.getBoundingClientRect().height;

      // Always open centered in the viewport (consistent placement for all menus)
      const desiredLeft = window.innerWidth / 2 - panelWidth / 2;
      const minLeft = viewportMargin;
      const maxLeft = Math.max(viewportMargin, window.innerWidth - viewportMargin - panelWidth);
      const left = Math.min(maxLeft, Math.max(minLeft, desiredLeft));

      let top = anchorRect.bottom + offsetY;
      const maxTop = Math.max(viewportMargin, window.innerHeight - viewportMargin - panelHeight);
      top = Math.min(maxTop, Math.max(viewportMargin, top));

      setAnchoredStyle({ left, top });
    };

    rafId = window.requestAnimationFrame(updatePosition);
    window.addEventListener('resize', updatePosition);

    return () => {
      if (rafId) window.cancelAnimationFrame(rafId);
      window.removeEventListener('resize', updatePosition);
    };
  }, [anchorRef, offsetY, positionStrategy, viewportMargin]);

  return (
    <div
      data-menu={menuId}
      className={
        positionStrategy === 'fixed'
          ? 'fixed z-[60]'
          : `absolute top-full pt-4 ${alignmentClass}`
      }
      style={positionStrategy === 'fixed' ? anchoredStyle ?? { opacity: 0 } : undefined}
      onMouseEnter={onMouseEnter}
      onMouseLeave={onMouseLeave}
    >
      <motion.div
        ref={panelRef}
        {...panelMotion}
        transition={{ duration: 0.35, ease: [0.16, 1, 0.3, 1] }}
        className={`${widthClass} rounded-3xl border border-red-500/20 bg-black/90 p-2 text-white shadow-[0_0_40px_rgba(255,0,0,0.2)] backdrop-blur-xl`}
      >
        <div className="grid h-full min-h-0 grid-cols-1 gap-8 lg:grid-cols-3">
          <div
            className={`grid min-h-0 gap-8 lg:col-span-2 ${sections?.length > 1 ? 'sm:grid-cols-2' : 'sm:grid-cols-1'
              } ${leftScrollable ? leftMaxHeightClass : 'max-h-full'} overflow-y-auto pr-2 [scrollbar-width:none] [&::-webkit-scrollbar]:hidden`}
          >
            {sections?.map((section) => (
              <div key={section.title} className="min-w-0">
                <p className="text-[10px] font-extrabold uppercase tracking-[0.22em]  text-red-500">
                  {section.title}
                </p>

                <motion.ul
                  initial="hidden"
                  animate="show"
                  variants={containerVariants}
                  className="mt-5 space-y-1"
                >
                  {section.items.map((item) => (
                    <MegaMenuItem key={item.label} {...item} />
                  ))}
                </motion.ul>
              </div>
            ))}
          </div>

          <div className="min-h-0 overflow-y-auto [scrollbar-width:none] [&::-webkit-scrollbar]:hidden lg:border-l lg:border-white/10 lg:pl-8">
            <p className="text-[10px] font-extrabold uppercase tracking-[0.22em] text-red-500">
              {highlight?.sectionTitle ?? 'HIGHLIGHT'}
            </p>
            <div className="mt-5">
              <HighlightCard highlight={highlight} />
            </div>
          </div>
        </div>
      </motion.div>
    </div>
  );
}

export default function Navbar() {
  const navbarRef = useRef(null);
  const buildButtonRef = useRef(null);
  const learnButtonRef = useRef(null);
  const productsButtonRef = useRef(null);
  const usecasesButtonRef = useRef(null);
  const [isOpen, setIsOpen] = useState(false);
  const [activeDesktopMenu, setActiveDesktopMenu] = useState(null);
  const [mobileBuildOpen, setMobileBuildOpen] = useState(false);
  const [mobileLearnOpen, setMobileLearnOpen] = useState(false);
  const [mobileProductsOpen, setMobileProductsOpen] = useState(false);
  const [mobileUseCasesOpen, setMobileUseCasesOpen] = useState(false);
  const desktopOpenTimerRef = useRef(null);
  const desktopCloseTimerRef = useRef(null);

  const DESKTOP_HOVER_OPEN_DELAY = 90;
  const DESKTOP_HOVER_CLOSE_DELAY = 200;

  const closeAllMenus = () => {
    setActiveDesktopMenu(null);
  };

  const clearDesktopTimers = () => {
    if (desktopOpenTimerRef.current) clearTimeout(desktopOpenTimerRef.current);
    if (desktopCloseTimerRef.current) clearTimeout(desktopCloseTimerRef.current);
  };

  const requestOpenDesktopMenu = (menuId) => {
    if (desktopCloseTimerRef.current) clearTimeout(desktopCloseTimerRef.current);
    if (desktopOpenTimerRef.current) clearTimeout(desktopOpenTimerRef.current);

    desktopOpenTimerRef.current = setTimeout(() => {
      setActiveDesktopMenu(menuId);
    }, DESKTOP_HOVER_OPEN_DELAY);
  };

  const requestCloseDesktopMenu = () => {
    if (desktopOpenTimerRef.current) clearTimeout(desktopOpenTimerRef.current);
    if (desktopCloseTimerRef.current) clearTimeout(desktopCloseTimerRef.current);

    desktopCloseTimerRef.current = setTimeout(() => {
      setActiveDesktopMenu(null);
    }, DESKTOP_HOVER_CLOSE_DELAY);
  };

  const toggleDesktopMenu = (menuId) => {
    clearDesktopTimers();
    setActiveDesktopMenu((previous) => (previous === menuId ? null : menuId));
  };

  useEffect(() => {
    const handleOutsideClick = (event) => {
      if (navbarRef.current && !navbarRef.current.contains(event.target)) {
        setIsOpen(false);
        closeAllMenus();
        setMobileBuildOpen(false);
        setMobileLearnOpen(false);
        setMobileProductsOpen(false);
        setMobileUseCasesOpen(false);
      }
    };

    document.addEventListener('mousedown', handleOutsideClick);

    return () => {
      clearDesktopTimers();
      document.removeEventListener('mousedown', handleOutsideClick);
    };
  }, []);

  const buildIconByLabel = {
    Testnet: FiGlobe,
    Faucet: FiDroplet,
    'Developer Docs': FiBookOpen,
    'MST Explorer': FiSearch,
    'Grant Program': FiZap,
    'Developer Support Forum': FiUsers,
    'Personalized Dev Support': FiTool
  };

  const learnIconByLabel = {
    'Block Validation Process': FiCpu,
    'DAO & MST Chain': FiUsers,
    'No Code Fractional Validator': FiTool,
    'Solidity : EVM Programming Language': FiCode,
    Transparency: FiEye
  };

  const productIconByName = {
    BridgeKey: FiLink,
    'MST Buddy': FiTool,
    ChainPay: FiLock
  };

  const navLinkClass = (active) =>
    `group relative text-sm font-medium lowercase tracking-tight transition-colors ${active ? 'text-white' : 'text-white/50 hover:text-white'}`;

  const renderBuildDropdown = () => (
    <MegaMenu
      menuId="build"
      widthClass="w-[1040px] max-w-[calc(100vw-2rem)]"
      anchorRef={buildButtonRef}
      positionStrategy="fixed"
      viewportMargin={16}
      offsetY={14}
      onMouseEnter={() => requestOpenDesktopMenu('build')}
      onMouseLeave={requestCloseDesktopMenu}
      sections={buildResources.map((group) => ({
        title: group.title,
        items: group.items.map((item) => ({
          ...item,
          icon: buildIconByLabel[item.label]
        }))
      }))}
      highlight={{
        sectionTitle: 'LATEST UPDATE',
        eyebrow: 'BUILD ON MST',
        title: 'Ship faster with MST tooling',
        description:
          'Access grants, testnet resources, and developer programs — designed for teams building production-grade Web3 products.',
        href: '/grant',
        cta: 'View grant program',
        icon: FiZap
      }}
    />
  );

  const renderLearnDropdown = () => (
    <MegaMenu
      menuId="learn"
      widthClass="w-[1040px] h-full max-w-[calc(100vw-2rem)]"
      anchorRef={learnButtonRef}
      positionStrategy="fixed"
      viewportMargin={16}
      offsetY={14}
      onMouseEnter={() => requestOpenDesktopMenu('learn')}
      onMouseLeave={requestCloseDesktopMenu}
      sections={learnResources.map((group) => ({
        title: group.title,
        items: group.items.map((item) => ({
          ...item,
          icon: learnIconByLabel[item.label]
        }))
      }))}
      highlight={{
        sectionTitle: 'LATEST UPDATE',
        eyebrow: learnHighlights.label,
        title: 'Knowledge drops are coming',
        description:
          'A premium learning experience is on the way — deep dives, validator guides, and product walkthroughs.',
        cta: 'Explore learning',
        icon: FiBookOpen
      }}
    />
  );

  const renderProductsDropdown = () => (
    <MegaMenu
      menuId="products"
      widthClass="w-[1040px] max-w-[calc(100vw-2rem)]"
      anchorRef={productsButtonRef}
      positionStrategy="fixed"
      viewportMargin={16}
      offsetY={14}
      onMouseEnter={() => requestOpenDesktopMenu('products')}
      onMouseLeave={requestCloseDesktopMenu}
      sections={[
        {
          title: 'PRODUCTS',
          items: productsResources.map((product) => ({
            label: product.name,
            description: product.description,
            href: product.href,
            icon: productIconByName[product.name]
          }))
        }
      ]}
      highlight={{
        sectionTitle: 'FEATURED PRODUCT',
        eyebrow: 'MST SUITE',
        title: productsResources[0]?.name ?? 'BridgeKey',
        description: productsResources[0]?.description ?? 'Cross-chain asset bridging',
        href: productsResources[0]?.href ?? '#',
        cta: 'View product',
        icon: productIconByName[productsResources[0]?.name] ?? FiLink
      }}
    />
  );

  const renderUseCasesDropdown = () => (
    <MegaMenu
      menuId="usecases"
      widthClass="w-[1040px] max-w-[calc(100vw-2rem)]"
      leftScrollable
      anchorRef={usecasesButtonRef}
      positionStrategy="fixed"
      viewportMargin={16}
      offsetY={14}
      onMouseEnter={() => requestOpenDesktopMenu('usecases')}
      onMouseLeave={requestCloseDesktopMenu}
      sections={[
        {
          title: (
            <div className="flex items-center justify-between">
              <span className="text-red-500">USECASES</span>
              <span className="text-blue-500 text-sm italic">Scroll for more usecases</span>
            </div>
          ),
          items: usecases.map((usecase) => ({
            label: usecase.title,
            href: usecase.link,
            prefix: usecase.id,
            icon: FiGrid
          }))
        }
      ]}
      highlight={{
        sectionTitle: 'COMING SOON',
        eyebrow: 'INDUSTRY PACKS',
        title: 'Blueprints for real-world sectors',
        description:
          'Curated templates and reference architectures for teams shipping in supply chain, real estate, identity, and more.',
        cta: 'Explore usecases',
        icon: FiZap
      }}
    />
  );

  return (
    <motion.header
      ref={navbarRef}
      initial={{ opacity: 0, y: -20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
      className="fixed top-4 left-0 right-0 z-50 mx-auto w-full max-w-[90rem] px-4 sm:px-5 lg:px-6"
    >
      <div
        className="relative rounded-2xl border border-white/10 bg-[#0b0b0b] p-[1px] shadow-[0_8px_26px_rgba(0,0,0,0.28)] transition-all duration-300"
      >
        <div className="relative overflow-visible rounded-2xl bg-black/90 backdrop-blur-[12px] group/nav">
          <div className="pointer-events-none absolute inset-0 bg-black/20" />

          <nav className="relative z-20 flex h-16 w-full items-center justify-between px-4 lg:px-8">
            <Link href="/" className="-ml-1 flex items-center gap-2 group">
              <motion.div
                whileHover={{ rotate: 10, scale: 1.08 }}
                transition={{ duration: 0.3, ease: "easeInOut" }}
                className="flex items-center justify-center"
              >
                <img
                  src="https://ik.imagekit.io/avboeabnm1/images/logo.png"
                  alt="MST logo"
                  width={70}
                  height={70}
                  className="h-[40px] w-auto object-contain transition-all duration-300 group-hover:drop-shadow-xl"
                />
              </motion.div>
            </Link>

            <ul className="hidden items-center gap-10 lg:flex">
              {navItems.map((item) => (
                <li key={item.label}>
                  {item.label === 'Build' ? (
                    <div className="relative" onMouseEnter={() => requestOpenDesktopMenu('build')} onMouseLeave={requestCloseDesktopMenu}>
                      <button
                        type="button"
                        ref={buildButtonRef}
                        onClick={() => toggleDesktopMenu('build')}
                        className={navLinkClass(true)}
                        aria-expanded={activeDesktopMenu === 'build'}

                      >
                        <span>Build</span>
                        <span className="absolute -bottom-1 left-0 h-[1.5px] w-full bg-[#ff2d2d]" />
                      </button>

                      <AnimatePresence>{activeDesktopMenu === 'build' ? renderBuildDropdown() : null}</AnimatePresence>
                    </div>
                  ) : item.label === 'Learn' ? (
                    <div className="relative" onMouseEnter={() => requestOpenDesktopMenu('learn')} onMouseLeave={requestCloseDesktopMenu}>
                      <button
                        type="button"
                        ref={learnButtonRef}
                        onClick={() => toggleDesktopMenu('learn')}
                        className={navLinkClass(false)}
                        aria-expanded={activeDesktopMenu === 'learn'}
                      >
                        <span>Learn</span>
                        <span className="absolute -bottom-1 left-0 h-[1.5px] w-0 bg-[#ff2d2d] transition-all duration-300 group-hover:w-full" />
                      </button>

                      <AnimatePresence>{activeDesktopMenu === 'learn' ? renderLearnDropdown() : null}</AnimatePresence>
                    </div>
                  ) : item.label === 'Products' ? (
                    <div className="relative" onMouseEnter={() => requestOpenDesktopMenu('products')} onMouseLeave={requestCloseDesktopMenu}>
                      <button
                        type="button"
                        ref={productsButtonRef}
                        onClick={() => toggleDesktopMenu('products')}
                        className={navLinkClass(false)}
                        aria-expanded={activeDesktopMenu === 'products'}
                      >
                        <span>Products</span>
                        <span className="absolute -bottom-1 left-0 h-[1.5px] w-0 bg-[#ff2d2d] transition-all duration-300 group-hover:w-full" />
                      </button>

                      <AnimatePresence>{activeDesktopMenu === 'products' ? renderProductsDropdown() : null}</AnimatePresence>
                    </div>
                  ) : item.label === 'Usecases' ? (
                    <div className="relative" onMouseEnter={() => requestOpenDesktopMenu('usecases')} onMouseLeave={requestCloseDesktopMenu}>
                      <button
                        type="button"
                        ref={usecasesButtonRef}
                        onClick={() => toggleDesktopMenu('usecases')}
                        className={navLinkClass(false)}
                        aria-expanded={activeDesktopMenu === 'usecases'}
                      >
                        <span>Usecases</span>
                        <span className="absolute -bottom-1 left-0 h-[1.5px] w-0 bg-[#ff2d2d] transition-all duration-300 group-hover:w-full" />
                      </button>

                      <AnimatePresence>{activeDesktopMenu === 'usecases' ? renderUseCasesDropdown() : null}</AnimatePresence>
                    </div>
                  ) : (
                    <Link href={item.href} className={navLinkClass(item.active)}>
                      <span>{item.label}</span>
                      <span
                        className={`absolute -bottom-1 left-0 h-[1.5px] bg-[#ff2d2d] transition-all duration-300 ${item.active ? 'w-full' : 'w-0 group-hover:w-full'
                          }`}
                      />
                    </Link>
                  )}
                </li>
              ))}
            </ul>

            <div className="flex items-center gap-3 mt-4">

              {/* Explore Button */}
              <div className="hidden lg:block relative group">
                <div className="absolute inset-0 rounded-full bg-[#ff2d2d] opacity-20 blur-md transition-opacity duration-300 group-hover:opacity-50" />

                <Link
                  href="#"
                  className="relative inline-flex items-center space-x-2 rounded-full mb-3
      bg-gradient-to-r from-[#ff2d2d] to-[#ff4d4d] mb-2
      px-6 py-2.5 text-[11px] font-extrabold uppercase tracking-[0.15em] text-white
      transition-all duration-300 ease-out
      hover:shadow-[0_6px_20px_rgba(255,45,45,0.4)]
      hover:scale-[1.05] active:scale-95"
                >
                  <span>explore ecosystem</span>
                  <svg
                    className="h-3.5 w-3.5 transition-transform duration-300 group-hover:-translate-y-0.5 group-hover:translate-x-0.5"
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke="currentColor"
                  >
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={3} d="M14 5l7 7m0 0l-7 7m7-7H3" />
                  </svg>
                </Link>
              </div>

              {/* Get Started Button */}
              <div className="hidden lg:block relative group">
                <div className="absolute inset-0 rounded-full bg-white opacity-10 blur-md transition-opacity duration-300 group-hover:opacity-30" />

                <Link
                  href="#"
                  className="relative inline-flex items-center space-x-2 rounded-full mb-3
      bg-white px-6 py-2.5 text-[11px] font-extrabold uppercase tracking-[0.15em] text-black
      transition-all duration-300 ease-out
      hover:shadow-[0_6px_20px_rgba(255,255,255,0.2)]
      hover:scale-[1.05] active:scale-95"
                >
                  <span>get started</span>
                  <svg
                    className="h-3.5 w-3.5 transition-transform duration-300 group-hover:-translate-y-0.5 group-hover:translate-x-0.5"
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke="currentColor"
                  >
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={3} d="M14 5l7 7m0 0l-7 7m7-7H3" />
                  </svg>
                </Link>
              </div>

            </div>



            <button
              type="button"
              aria-label="Toggle navigation menu"
              aria-expanded={isOpen}
              onClick={() => {
                setIsOpen((previous) => !previous);
                setMobileBuildOpen(false);
                setMobileLearnOpen(false);
                setMobileProductsOpen(false);
                setMobileUseCasesOpen(false);
                closeAllMenus();
              }}
              className="group relative inline-flex h-9 w-9 flex-col items-center justify-center gap-1.5 rounded-full border border-white/10 bg-white/5 text-white lg:hidden"
            >
              <span className={`h-0.5 w-4 origin-center bg-white transition-all duration-300 ${isOpen ? 'translate-y-[8px] rotate-45' : ''}`} />
              <span className={`h-0.5 w-4 bg-white transition-all duration-300 ${isOpen ? 'scale-x-0 opacity-0' : 'opacity-100'}`} />
              <span className={`h-0.5 w-4 origin-center bg-white transition-all duration-300 ${isOpen ? '-translate-y-[8px] -rotate-45' : ''}`} />
            </button>
          </nav>
        </div>
      </div>

      <AnimatePresence>
        {isOpen ? (
          <motion.div
            initial={{ opacity: 0, y: -10, scale: 0.95 }}
            animate={{ opacity: 1, y: 8, scale: 1 }}
            exit={{ opacity: 0, y: -10, scale: 0.95 }}
            transition={{ duration: 0.2 }}
            className="absolute left-4 right-4 top-full mt-2 rounded-2xl border border-white/10 bg-black/95 p-4 text-white shadow-2xl backdrop-blur-[12px] lg:hidden"
          >
            <div className="space-y-1">
              <button
                type="button"
                onClick={() => setMobileBuildOpen((prev) => !prev)}
                className="flex w-full items-center justify-between rounded-xl bg-white/5 px-4 py-3 text-sm font-bold lowercase text-white transition-all hover:bg-red-500/10"
              >
                <span className="flex items-center gap-3">
                  <span className="h-1.5 w-1.5 rounded-full bg-red-500 shadow-sm" />
                  Build
                </span>
                <ChevronRight size={16} className={`transition-transform duration-300 ${mobileBuildOpen ? 'rotate-90' : ''}`} />
              </button>

              <AnimatePresence>
                {mobileBuildOpen ? (
                  <motion.div
                    initial={{ opacity: 0, height: 0, y: -6 }}
                    animate={{ opacity: 1, height: 'auto', y: 0 }}
                    exit={{ opacity: 0, height: 0, y: -6 }}
                    transition={{ duration: 0.2, ease: [0.16, 1, 0.3, 1] }}
                    className="overflow-hidden rounded-xl border border-white/10 bg-white/5 px-3 py-3"
                  >
                    <div className="space-y-4">
                      {buildResources.map((group) => (
                        <div key={group.title} className="space-y-2">
                          <p className="px-2 text-[10px] font-extrabold uppercase tracking-[0.22em] text-red-500">{group.title}</p>
                          <div className="space-y-1">
                            {group.items.map((item) => (
                              <Link
                                key={item.label}
                                href={item.href}
                                onClick={() => setIsOpen(false)}
                                className="group flex items-center justify-between rounded-lg px-3 py-2 text-xs font-medium text-white/70 transition-all hover:bg-red-500/10 hover:text-white"
                              >
                                <span className="transition-transform duration-300 group-hover:translate-x-0.5">{item.label}</span>
                                <ChevronRight size={12} className="text-white/25 transition-transform duration-300 group-hover:translate-x-0.5" />
                              </Link>
                            ))}
                          </div>
                        </div>
                      ))}
                    </div>
                  </motion.div>
                ) : null}
              </AnimatePresence>

              <button
                type="button"
                onClick={() => setMobileLearnOpen((prev) => !prev)}
                className="mt-1 flex w-full items-center justify-between rounded-xl px-4 py-3 text-sm font-bold lowercase text-white/60 transition-all hover:bg-white/5 hover:text-white"
              >
                <span className="flex items-center gap-3">
                  <span className="h-1.5 w-1.5 rounded-full bg-white/20 shadow-sm" />
                  Learn
                </span>
                <ChevronRight size={16} className={`transition-transform duration-300 ${mobileLearnOpen ? 'rotate-90' : ''}`} />
              </button>

              <AnimatePresence>
                {mobileLearnOpen ? (
                  <motion.div
                    initial={{ opacity: 0, height: 0, y: -6 }}
                    animate={{ opacity: 1, height: 'auto', y: 0 }}
                    exit={{ opacity: 0, height: 0, y: -6 }}
                    transition={{ duration: 0.2, ease: [0.16, 1, 0.3, 1] }}
                    className="overflow-hidden rounded-xl border border-white/10 bg-white/5 px-3 py-3"
                  >
                    <div className="space-y-4">
                      <div className="space-y-2">
                        <p className="px-2 text-[10px] font-extrabold uppercase tracking-[0.22em] text-red-500">BLOCKCHAIN</p>
                        <div className="space-y-1">
                          {learnResources[0].items.map((item) => (
                            <Link
                              key={item.label}
                              href={item.href}
                              onClick={() => setIsOpen(false)}
                              className="group flex items-center justify-between rounded-lg px-3 py-2 text-xs font-medium text-white/70 transition-all hover:bg-red-500/10 hover:text-white"
                            >
                              <span className="transition-transform duration-300 group-hover:translate-x-0.5">{item.label}</span>
                              <ChevronRight size={12} className="text-white/25 transition-transform duration-300 group-hover:translate-x-0.5" />
                            </Link>
                          ))}
                        </div>
                      </div>

                      <div className="space-y-2">
                        <p className="px-2 text-[10px] font-extrabold uppercase tracking-[0.22em] text-red-500">HIGHLIGHTS</p>
                        <div className="rounded-none border border-white/15 bg-white/10 p-4">
                          <div className="mb-3 text-[10px] font-bold uppercase tracking-[0.18em] text-white/50">LATEST TWEET</div>
                          <div className="flex h-[120px] items-center justify-center border border-white/10 bg-black/20 text-xs text-white/60">
                            Tweet content coming soon
                          </div>
                        </div>
                      </div>
                    </div>
                  </motion.div>
                ) : null}
              </AnimatePresence>

              <button
                type="button"
                onClick={() => setMobileProductsOpen((prev) => !prev)}
                className="mt-1 flex w-full items-center justify-between rounded-xl px-4 py-3 text-sm font-bold lowercase text-white/60 transition-all hover:bg-white/5 hover:text-white"
              >
                <span className="flex items-center gap-3">
                  <span className="h-1.5 w-1.5 rounded-full bg-white/20 shadow-sm" />
                  Products
                </span>
                <ChevronRight size={16} className={`transition-transform duration-300 ${mobileProductsOpen ? 'rotate-90' : ''}`} />
              </button>

              <AnimatePresence>
                {mobileProductsOpen ? (
                  <motion.div
                    initial={{ opacity: 0, height: 0, y: -6 }}
                    animate={{ opacity: 1, height: 'auto', y: 0 }}
                    exit={{ opacity: 0, height: 0, y: -6 }}
                    transition={{ duration: 0.2, ease: [0.16, 1, 0.3, 1] }}
                    className="overflow-hidden rounded-xl border border-white/10 bg-white/5 px-3 py-3"
                  >
                    <div className="space-y-2">
                      <p className="px-2 text-[10px] font-extrabold uppercase tracking-[0.22em] text-red-500">PRODUCTS</p>
                      {productsResources.map((product, index) => (
                        <Link
                          key={product.name}
                          href={product.href}
                          onClick={() => setIsOpen(false)}
                          className={`block rounded-lg px-3 py-2 transition-all hover:bg-white/5 ${index !== productsResources.length - 1 ? 'border-b border-white/10' : ''}`}
                        >
                          <div className="text-xs font-bold text-white transition-all hover:text-red-400">
                            {product.name}
                          </div>
                          <div className="mt-1 text-[11px] text-white/55">
                            {product.description}
                          </div>
                        </Link>
                      ))}
                    </div>
                  </motion.div>
                ) : null}
              </AnimatePresence>

              <button
                type="button"
                onClick={() => setMobileUseCasesOpen((prev) => !prev)}
                className="mt-1 flex w-full items-center justify-between rounded-xl px-4 py-3 text-sm font-bold lowercase text-white/60 transition-all hover:bg-white/5 hover:text-white"
              >
                <span className="flex items-center gap-3">
                  <span className="h-1.5 w-1.5 rounded-full bg-white/20 shadow-sm" />
                  Usecases
                </span>
                <ChevronRight size={16} className={`transition-transform duration-300 ${mobileUseCasesOpen ? 'rotate-90' : ''}`} />
              </button>

              <AnimatePresence>
                {mobileUseCasesOpen ? (
                  <motion.div
                    initial={{ opacity: 0, height: 0, y: -6 }}
                    animate={{ opacity: 1, height: 'auto', y: 0 }}
                    exit={{ opacity: 0, height: 0, y: -6 }}
                    transition={{ duration: 0.2, ease: [0.16, 1, 0.3, 1] }}
                    className="overflow-hidden rounded-xl border border-white/10 bg-white/5 px-3 py-3"
                  >
                    <div className="grid max-h-[450px] grid-cols-1 gap-2 overflow-y-auto scroll-smooth [scrollbar-width:none] [&::-webkit-scrollbar]:hidden sm:grid-cols-2">
                      {usecases.map((item) => (
                        <Link
                          key={item.id}
                          href={item.link}
                          onClick={() => setIsOpen(false)}
                          className="rounded-xl border border-white/10 bg-black/20 px-3 py-3 transition-all hover:border-[#EA2828]/70 hover:bg-white/5"
                        >
                          <div className="text-[10px] font-extrabold uppercase tracking-[0.12em] text-red-500">{item.id}</div>
                          <div className="mt-1 text-xs font-semibold text-white/85">{item.title}</div>
                        </Link>
                      ))}
                    </div>

                    <p className="text-sm italic text-blue-500 mb-2 text-center">Scroll for more usecases</p>
                  </motion.div>
                ) : null}
              </AnimatePresence>

              {navItems
                .filter((item) => item.label !== 'Build' && item.label !== 'Learn' && item.label !== 'Products' && item.label !== 'Usecases')
                .map((item) => (
                  <Link
                    key={item.label}
                    href={item.href}
                    className={`flex w-full items-center justify-between rounded-xl px-4 py-3 text-sm font-bold lowercase transition-all ${item.active ? 'bg-teal-500/10 text-[#2DD4BF]' : 'text-white/60 hover:bg-white/5 hover:text-white'}`}
                    onClick={() => setIsOpen(false)}
                  >
                    <span className="flex items-center gap-3">
                      <span className={`h-1.5 w-1.5 rounded-full shadow-sm ${item.active ? 'bg-[#2DD4BF]' : 'bg-white/20'}`} />
                      {item.label}
                    </span>
                    <svg className="h-4 w-4 opacity-30" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                    </svg>
                  </Link>
                ))}
            </div>

            <div className="mt-4 px-2">
              <Link
                href="#"
                onClick={() => setIsOpen(false)}
                className="flex w-full items-center justify-center gap-2 rounded-xl bg-gradient-to-r from-red-500 to-red-400 px-5 py-3.5 text-xs font-bold uppercase tracking-[0.15em] text-white shadow-[0_6px_20px_rgba(255,45,45,0.35)] transition-all hover:brightness-110 active:scale-95"
              >
                <span>explore ecosystem</span>
              </Link>
            </div>
            <div className="mt-4 px-2">
              <Link
                href="#"
                onClick={() => setIsOpen(false)}
                className="flex w-full items-center justify-center gap-2 rounded-xl bg-white px-5 py-3.5 text-xs font-bold uppercase tracking-[0.15em] text-black shadow-[0_6px_20px_rgba(255,255,255,0.16)] transition-all hover:bg-white/90 active:scale-95"
              >
                <span>get started</span>
              </Link>
            </div>
          </motion.div>
        ) : null}
      </AnimatePresence>
    </motion.header>
  );
}