import React, { useState, useEffect } from 'react';
import { Save, Plus, Trash2 } from 'lucide-react';
import { featureColorOptions } from '../../data/siteContent';

const iconOptions = ['Gavel', 'Lock', 'Database', 'CheckCircle', 'Shield', 'Smartphone', 'Zap', 'Globe', 'Star', 'Award', 'Target', 'Users'];

const FeaturesEditor = ({ data, onSave }) => {
    const [form, setForm] = useState(data);

    useEffect(() => { setForm(data); }, [data]);

    const update = (key, value) => setForm((p) => ({ ...p, [key]: value }));

    const updateFeature = (index, key, value) => {
        const updated = [...form.features];
        updated[index] = { ...updated[index], [key]: value };
        update('features', updated);
    };

    const addFeature = () => {
        update('features', [...form.features, {
            iconName: 'Star',
            title: 'New Feature',
            description: 'Description of the new feature.',
            color: 'bg-blue-500',
        }]);
    };

    const removeFeature = (index) => {
        update('features', form.features.filter((_, i) => i !== index));
    };

    return (
        <div className="space-y-8 max-w-3xl">
            {/* Section Header */}
            <div className="bg-white/[0.03] border border-white/[0.06] rounded-2xl p-6 space-y-5">
                <h3 className="text-white font-semibold text-lg">Section Header</h3>
                <div className="grid md:grid-cols-3 gap-4">
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
                    <div>
                        <label className="block text-sm text-slate-400 mb-1">Suffix</label>
                        <input value={form.headingSuffix} onChange={(e) => update('headingSuffix', e.target.value)}
                            className="w-full px-4 py-2.5 bg-white/5 border border-white/10 rounded-lg text-white focus:outline-none focus:border-accent transition-all" />
                    </div>
                </div>
                <div>
                    <label className="block text-sm text-slate-400 mb-1">Description</label>
                    <textarea value={form.description} onChange={(e) => update('description', e.target.value)} rows={2}
                        className="w-full px-4 py-2.5 bg-white/5 border border-white/10 rounded-lg text-white focus:outline-none focus:border-accent transition-all resize-none" />
                </div>
            </div>

            {/* Feature Cards */}
            <div className="bg-white/[0.03] border border-white/[0.06] rounded-2xl p-6 space-y-4">
                <div className="flex items-center justify-between">
                    <h3 className="text-white font-semibold text-lg">Feature Cards ({form.features.length})</h3>
                    <button onClick={addFeature} className="flex items-center gap-1 text-accent text-sm hover:text-blue-400 transition-colors">
                        <Plus className="w-4 h-4" /> Add Feature
                    </button>
                </div>

                {form.features.map((feature, i) => (
                    <div key={i} className="bg-white/[0.02] border border-white/[0.05] rounded-xl p-4 space-y-3">
                        <div className="flex items-center justify-between">
                            <span className="text-slate-400 text-sm font-medium">Feature {i + 1}</span>
                            <button onClick={() => removeFeature(i)} className="text-red-400 hover:text-red-300 p-1">
                                <Trash2 className="w-4 h-4" />
                            </button>
                        </div>
                        <div className="grid md:grid-cols-2 gap-3">
                            <div>
                                <label className="block text-xs text-slate-500 mb-1">Title</label>
                                <input value={feature.title} onChange={(e) => updateFeature(i, 'title', e.target.value)}
                                    className="w-full px-3 py-2 bg-white/5 border border-white/10 rounded-lg text-white text-sm focus:outline-none focus:border-accent transition-all" />
                            </div>
                            <div className="grid grid-cols-2 gap-3">
                                <div>
                                    <label className="block text-xs text-slate-500 mb-1">Icon</label>
                                    <select value={feature.iconName} onChange={(e) => updateFeature(i, 'iconName', e.target.value)}
                                        className="w-full px-3 py-2 bg-white/5 border border-white/10 rounded-lg text-white text-sm focus:outline-none focus:border-accent transition-all">
                                        {iconOptions.map((icon) => (
                                            <option key={icon} value={icon} className="bg-slate-800">{icon}</option>
                                        ))}
                                    </select>
                                </div>
                                <div>
                                    <label className="block text-xs text-slate-500 mb-1">Color</label>
                                    <select value={feature.color} onChange={(e) => updateFeature(i, 'color', e.target.value)}
                                        className="w-full px-3 py-2 bg-white/5 border border-white/10 rounded-lg text-white text-sm focus:outline-none focus:border-accent transition-all">
                                        {featureColorOptions.map((c) => (
                                            <option key={c} value={c} className="bg-slate-800">{c.replace('bg-', '').replace('-500', '')}</option>
                                        ))}
                                    </select>
                                </div>
                            </div>
                        </div>
                        <div>
                            <label className="block text-xs text-slate-500 mb-1">Description</label>
                            <textarea value={feature.description} onChange={(e) => updateFeature(i, 'description', e.target.value)} rows={2}
                                className="w-full px-3 py-2 bg-white/5 border border-white/10 rounded-lg text-white text-sm focus:outline-none focus:border-accent transition-all resize-none" />
                        </div>
                    </div>
                ))}
            </div>

            <button onClick={() => onSave(form)}
                className="flex items-center gap-2 bg-accent hover:bg-blue-600 text-white px-6 py-3 rounded-xl font-semibold transition-all shadow-lg shadow-accent/20">
                <Save className="w-4 h-4" /> Save Features
            </button>
        </div>
    );
};

export default FeaturesEditor;
