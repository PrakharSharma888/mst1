"use client";
import React, { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { X, User, Mail, Phone, School, ArrowRight } from "lucide-react";
import { toast } from "react-toastify";

export default function EnrollmentModal({ isOpen, onClose }) {
    const [form, setForm] = useState({
        firstName: "",
        lastName: "",
        email: "",
        mobile: "",
        college: ""
    });
    const [loading, setLoading] = useState(false);

    const handleChange = (e) => {
        setForm({ ...form, [e.target.name]: e.target.value });
    };

    const handleSubmit = async (e) => {
        e.preventDefault();
        if (!form.email || !form.firstName) {
            toast.error("Please fill in all required fields.");
            return;
        }

        try {
            setLoading(true);
            const response = await fetch("/api/enroll", {
                method: "POST",
                headers: { "Content-Type": "application/json" },
                body: JSON.stringify(form),
            });
            const result = await response.json();

            if (result.status === "success") {
                toast.success("Enrollment Initialized! Welcome to MST Academy.");
                setForm({ firstName: "", lastName: "", email: "", mobile: "", college: "" });
                setTimeout(onClose, 2000);
            } else {
                toast.error("Error: " + (result.message || "Something went wrong"));
            }
        } catch (err) {
            toast.error("Failed to submit. Please try again.");
        } finally {
            setLoading(false);
        }
    };

    if (!isOpen) return null;

    return (
        <AnimatePresence>
            <motion.div
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                exit={{ opacity: 0 }}
                className="fixed inset-0 z-[100] flex items-center justify-center p-4 bg-slate-950/80 backdrop-blur-md"
            >
                <motion.div
                    initial={{ scale: 0.9, opacity: 0, y: 20 }}
                    animate={{ scale: 1, opacity: 1, y: 0 }}
                    exit={{ scale: 0.9, opacity: 0, y: 20 }}
                    className="relative w-full max-w-2xl bg-white rounded-[2.5rem] shadow-2xl overflow-hidden border border-slate-200"
                >
                    {/* Header Overlay */}
                    <div className="absolute top-0 left-0 w-full h-32 bg-gradient-to-br from-red-600 to-red-800 opacity-[0.03] pointer-events-none" />
                    
                    {/* Close Button */}
                    <button 
                        onClick={onClose}
                        className="absolute top-6 right-6 p-2 rounded-full hover:bg-slate-100 transition-colors z-20 text-slate-400 hover:text-slate-950"
                    >
                        <X size={20} />
                    </button>

                    <div className="p-8 md:p-12 relative z-10">
                        <div className="mb-10">
                            <h2 className="font-bungee text-3xl text-slate-950 mb-3 tracking-tight">Initialize Enrollment</h2>
                            <p className="text-slate-500 text-sm font-medium">Complete your tactical profile to join the MST Developer Academy.</p>
                        </div>

                        <form onSubmit={handleSubmit} className="space-y-5">
                            <div className="grid md:grid-cols-2 gap-5">
                                <div className="space-y-2">
                                    <label className="text-[10px] font-bold uppercase tracking-widest text-slate-400 ml-1">First Name</label>
                                    <div className="relative">
                                        <User className="absolute left-4 top-1/2 -translate-y-1/2 text-slate-300" size={18} />
                                        <input
                                            name="firstName"
                                            value={form.firstName}
                                            onChange={handleChange}
                                            placeholder="John"
                                            required
                                            className="w-full bg-slate-50 border border-slate-200 pl-12 pr-4 py-4 rounded-2xl focus:ring-4 focus:ring-red-600/5 focus:border-red-600 outline-none transition-all text-slate-950 font-medium"
                                        />
                                    </div>
                                </div>
                                <div className="space-y-2">
                                    <label className="text-[10px] font-bold uppercase tracking-widest text-slate-400 ml-1">Last Name</label>
                                    <div className="relative">
                                        <User className="absolute left-4 top-1/2 -translate-y-1/2 text-slate-300" size={18} />
                                        <input
                                            name="lastName"
                                            value={form.lastName}
                                            onChange={handleChange}
                                            placeholder="Doe"
                                            required
                                            className="w-full bg-slate-50 border border-slate-200 pl-12 pr-4 py-4 rounded-2xl focus:ring-4 focus:ring-red-600/5 focus:border-red-600 outline-none transition-all text-slate-950 font-medium"
                                        />
                                    </div>
                                </div>
                            </div>

                            <div className="grid md:grid-cols-2 gap-5">
                                <div className="space-y-2">
                                    <label className="text-[10px] font-bold uppercase tracking-widest text-slate-400 ml-1">Email Address</label>
                                    <div className="relative">
                                        <Mail className="absolute left-4 top-1/2 -translate-y-1/2 text-slate-300" size={18} />
                                        <input
                                            name="email"
                                            value={form.email}
                                            onChange={handleChange}
                                            type="email"
                                            placeholder="john@example.com"
                                            required
                                            className="w-full bg-slate-50 border border-slate-200 pl-12 pr-4 py-4 rounded-2xl focus:ring-4 focus:ring-red-600/5 focus:border-red-600 outline-none transition-all text-slate-950 font-medium"
                                        />
                                    </div>
                                </div>
                                <div className="space-y-2">
                                    <label className="text-[10px] font-bold uppercase tracking-widest text-slate-400 ml-1">Mobile Number</label>
                                    <div className="relative">
                                        <Phone className="absolute left-4 top-1/2 -translate-y-1/2 text-slate-300" size={18} />
                                        <input
                                            name="mobile"
                                            value={form.mobile}
                                            onChange={handleChange}
                                            placeholder="+91 9876543210"
                                            required
                                            className="w-full bg-slate-50 border border-slate-200 pl-12 pr-4 py-4 rounded-2xl focus:ring-4 focus:ring-red-600/5 focus:border-red-600 outline-none transition-all text-slate-950 font-medium"
                                        />
                                    </div>
                                </div>
                            </div>

                            <div className="space-y-2">
                                <label className="text-[10px] font-bold uppercase tracking-widest text-slate-400 ml-1">College / University</label>
                                <div className="relative">
                                    <School className="absolute left-4 top-1/2 -translate-y-1/2 text-slate-300" size={18} />
                                    <input
                                        name="college"
                                        value={form.college}
                                        onChange={handleChange}
                                        placeholder="Enter your college name"
                                        required
                                        className="w-full bg-slate-50 border border-slate-200 pl-12 pr-4 py-4 rounded-2xl focus:ring-4 focus:ring-red-600/5 focus:border-red-600 outline-none transition-all text-slate-950 font-medium"
                                    />
                                </div>
                            </div>

                            <button
                                type="submit"
                                disabled={loading}
                                className="w-full bg-slate-950 text-white font-bold py-5 rounded-2xl flex justify-center items-center gap-3 hover:bg-red-600 active:scale-[0.98] transition-all disabled:opacity-50 shadow-xl shadow-slate-900/10 mt-8 group"
                            >
                                {loading ? (
                                    <div className="animate-spin h-5 w-5 border-3 border-white border-t-transparent rounded-full" />
                                ) : (
                                    <>
                                        Complete Enrollment
                                        <ArrowRight size={18} className="group-hover:translate-x-1 transition-transform" />
                                    </>
                                )}
                            </button>
                        </form>
                    </div>
                </motion.div>
            </motion.div>
        </AnimatePresence>
    );
}
