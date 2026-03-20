import React, { useState, useEffect } from 'react';
import { Save } from 'lucide-react';

const HowItWorksEditor = ({ data, onSave }) => {
    const [form, setForm] = useState(data);

    useEffect(() => { setForm(data); }, [data]);

    const update = (key, value) => setForm((p) => ({ ...p, [key]: value }));

    const updateStep = (index, key, value) => {
        const updated = [...form.steps];
        updated[index] = { ...updated[index], [key]: value };
        update('steps', updated);
    };

    const bgOptions = ['bg-blue-600', 'bg-purple-600', 'bg-indigo-600', 'bg-green-600', 'bg-red-600', 'bg-orange-600', 'bg-teal-600', 'bg-pink-600'];

    return (
        <div className="space-y-8 max-w-3xl">
            {/* Section Header */}
            <div className="bg-white/[0.03] border border-white/[0.06] rounded-2xl p-6 space-y-5">
                <h3 className="text-white font-semibold text-lg">Section Header</h3>
                <div className="grid md:grid-cols-2 gap-4">
                    <div>
                        <label className="block text-sm text-slate-400 mb-1">Heading</label>
                        <input value={form.heading} onChange={(e) => update('heading', e.target.value)}
                            className="w-full px-4 py-2.5 bg-white/5 border border-white/10 rounded-lg text-white focus:outline-none focus:border-accent transition-all" />
                    </div>
                    <div>
                        <label className="block text-sm text-slate-400 mb-1">Accent Word</label>
                        <input value={form.headingAccent} onChange={(e) => update('headingAccent', e.target.value)}
                            className="w-full px-4 py-2.5 bg-white/5 border border-white/10 rounded-lg text-white focus:outline-none focus:border-accent transition-all" />
                    </div>
                </div>
            </div>

            {/* Steps */}
            <div className="bg-white/[0.03] border border-white/[0.06] rounded-2xl p-6 space-y-4">
                <h3 className="text-white font-semibold text-lg">Steps</h3>
                {form.steps.map((step, i) => (
                    <div key={i} className="bg-white/[0.02] border border-white/[0.05] rounded-xl p-4 space-y-3">
                        <div className="flex items-center gap-3">
                            <div className={`w-8 h-8 rounded-full ${step.bg} flex items-center justify-center text-white font-bold text-sm flex-shrink-0`}>
                                {i + 1}
                            </div>
                            <span className="text-slate-400 text-sm font-medium">Step {i + 1}</span>
                        </div>
                        <div className="grid md:grid-cols-2 gap-3">
                            <div>
                                <label className="block text-xs text-slate-500 mb-1">Title</label>
                                <input value={step.title} onChange={(e) => updateStep(i, 'title', e.target.value)}
                                    className="w-full px-3 py-2 bg-white/5 border border-white/10 rounded-lg text-white text-sm focus:outline-none focus:border-accent transition-all" />
                            </div>
                            <div>
                                <label className="block text-xs text-slate-500 mb-1">Color</label>
                                <select value={step.bg} onChange={(e) => updateStep(i, 'bg', e.target.value)}
                                    className="w-full px-3 py-2 bg-white/5 border border-white/10 rounded-lg text-white text-sm focus:outline-none focus:border-accent transition-all">
                                    {bgOptions.map((c) => (
                                        <option key={c} value={c} className="bg-slate-800">{c.replace('bg-', '').replace('-600', '')}</option>
                                    ))}
                                </select>
                            </div>
                        </div>
                        <div>
                            <label className="block text-xs text-slate-500 mb-1">Description</label>
                            <textarea value={step.description} onChange={(e) => updateStep(i, 'description', e.target.value)} rows={2}
                                className="w-full px-3 py-2 bg-white/5 border border-white/10 rounded-lg text-white text-sm focus:outline-none focus:border-accent transition-all resize-none" />
                        </div>
                    </div>
                ))}
            </div>

            <button onClick={() => onSave(form)}
                className="flex items-center gap-2 bg-accent hover:bg-blue-600 text-white px-6 py-3 rounded-xl font-semibold transition-all shadow-lg shadow-accent/20">
                <Save className="w-4 h-4" /> Save How It Works
            </button>
        </div>
    );
};

export default HowItWorksEditor;
