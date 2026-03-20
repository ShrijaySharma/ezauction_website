import React, { useState, useEffect } from 'react';
import { Save, Plus, Trash2, GripVertical } from 'lucide-react';

const HeroEditor = ({ data, onSave }) => {
    const [form, setForm] = useState(data);

    useEffect(() => { setForm(data); }, [data]);

    const update = (key, value) => setForm((p) => ({ ...p, [key]: value }));

    const updateDashboard = (index, key, value) => {
        const updated = [...form.dashboards];
        updated[index] = { ...updated[index], [key]: value };
        update('dashboards', updated);
    };

    const addDashboard = () => {
        update('dashboards', [...form.dashboards, { src: '', title: 'New Dashboard', color: 'from-blue-500 to-cyan-500' }]);
    };

    const removeDashboard = (index) => {
        update('dashboards', form.dashboards.filter((_, i) => i !== index));
    };

    const updateSport = (index, value) => {
        const updated = [...form.sports];
        updated[index] = value;
        update('sports', updated);
    };

    const addSport = () => update('sports', [...form.sports, '🏅 New Sport']);
    const removeSport = (index) => update('sports', form.sports.filter((_, i) => i !== index));

    return (
        <div className="space-y-8 max-w-3xl">
            {/* Badge & Title */}
            <div className="bg-white/[0.03] border border-white/[0.06] rounded-2xl p-6 space-y-5">
                <h3 className="text-white font-semibold text-lg">Text Content</h3>

                <div>
                    <label className="block text-sm text-slate-400 mb-1">Badge Text</label>
                    <input value={form.badgeText} onChange={(e) => update('badgeText', e.target.value)}
                        className="w-full px-4 py-2.5 bg-white/5 border border-white/10 rounded-lg text-white focus:outline-none focus:border-accent transition-all" />
                </div>

                <div className="grid md:grid-cols-3 gap-4">
                    <div>
                        <label className="block text-sm text-slate-400 mb-1">Title Line 1</label>
                        <input value={form.titleLine1} onChange={(e) => update('titleLine1', e.target.value)}
                            className="w-full px-4 py-2.5 bg-white/5 border border-white/10 rounded-lg text-white focus:outline-none focus:border-accent transition-all" />
                    </div>
                    <div>
                        <label className="block text-sm text-slate-400 mb-1">Title Line 2</label>
                        <input value={form.titleLine2} onChange={(e) => update('titleLine2', e.target.value)}
                            className="w-full px-4 py-2.5 bg-white/5 border border-white/10 rounded-lg text-white focus:outline-none focus:border-accent transition-all" />
                    </div>
                    <div>
                        <label className="block text-sm text-slate-400 mb-1">Title Line 3</label>
                        <input value={form.titleLine3} onChange={(e) => update('titleLine3', e.target.value)}
                            className="w-full px-4 py-2.5 bg-white/5 border border-white/10 rounded-lg text-white focus:outline-none focus:border-accent transition-all" />
                    </div>
                </div>

                <div>
                    <label className="block text-sm text-slate-400 mb-1">Description</label>
                    <textarea value={form.description} onChange={(e) => update('description', e.target.value)} rows={3}
                        className="w-full px-4 py-2.5 bg-white/5 border border-white/10 rounded-lg text-white focus:outline-none focus:border-accent transition-all resize-none" />
                </div>

                <div className="grid md:grid-cols-2 gap-4">
                    <div>
                        <label className="block text-sm text-slate-400 mb-1">CTA Button Text</label>
                        <input value={form.ctaText} onChange={(e) => update('ctaText', e.target.value)}
                            className="w-full px-4 py-2.5 bg-white/5 border border-white/10 rounded-lg text-white focus:outline-none focus:border-accent transition-all" />
                    </div>
                    <div>
                        <label className="block text-sm text-slate-400 mb-1">Trust Badge Text</label>
                        <input value={form.trustText} onChange={(e) => update('trustText', e.target.value)}
                            className="w-full px-4 py-2.5 bg-white/5 border border-white/10 rounded-lg text-white focus:outline-none focus:border-accent transition-all" />
                    </div>
                </div>
            </div>

            {/* Sports Tags */}
            <div className="bg-white/[0.03] border border-white/[0.06] rounded-2xl p-6 space-y-4">
                <div className="flex items-center justify-between">
                    <h3 className="text-white font-semibold text-lg">Sport Tags</h3>
                    <button onClick={addSport} className="flex items-center gap-1 text-accent text-sm hover:text-blue-400 transition-colors">
                        <Plus className="w-4 h-4" /> Add
                    </button>
                </div>
                {form.sports.map((sport, i) => (
                    <div key={i} className="flex items-center gap-3">
                        <input value={sport} onChange={(e) => updateSport(i, e.target.value)}
                            className="flex-1 px-4 py-2.5 bg-white/5 border border-white/10 rounded-lg text-white focus:outline-none focus:border-accent transition-all" />
                        <button onClick={() => removeSport(i)} className="text-red-400 hover:text-red-300 p-2">
                            <Trash2 className="w-4 h-4" />
                        </button>
                    </div>
                ))}
            </div>

            {/* Dashboard Images */}
            <div className="bg-white/[0.03] border border-white/[0.06] rounded-2xl p-6 space-y-4">
                <div className="flex items-center justify-between">
                    <h3 className="text-white font-semibold text-lg">Dashboard Images (Carousel)</h3>
                    <button onClick={addDashboard} className="flex items-center gap-1 text-accent text-sm hover:text-blue-400 transition-colors">
                        <Plus className="w-4 h-4" /> Add
                    </button>
                </div>
                {form.dashboards.map((db, i) => (
                    <div key={i} className="bg-white/[0.02] border border-white/[0.05] rounded-xl p-4 space-y-3">
                        <div className="flex items-center justify-between">
                            <span className="text-slate-400 text-sm font-medium">Slide {i + 1}</span>
                            {form.dashboards.length > 1 && (
                                <button onClick={() => removeDashboard(i)} className="text-red-400 hover:text-red-300 p-1">
                                    <Trash2 className="w-4 h-4" />
                                </button>
                            )}
                        </div>
                        <div className="grid md:grid-cols-2 gap-3">
                            <div>
                                <label className="block text-xs text-slate-500 mb-1">Title</label>
                                <input value={db.title} onChange={(e) => updateDashboard(i, 'title', e.target.value)}
                                    className="w-full px-3 py-2 bg-white/5 border border-white/10 rounded-lg text-white text-sm focus:outline-none focus:border-accent transition-all" />
                            </div>
                            <div>
                                <label className="block text-xs text-slate-500 mb-1">Image URL / Path</label>
                                <input value={db.src} onChange={(e) => updateDashboard(i, 'src', e.target.value)}
                                    className="w-full px-3 py-2 bg-white/5 border border-white/10 rounded-lg text-white text-sm focus:outline-none focus:border-accent transition-all"
                                    placeholder="/image.png or https://..." />
                            </div>
                        </div>
                    </div>
                ))}
            </div>

            {/* Save Button */}
            <button onClick={() => onSave(form)}
                className="flex items-center gap-2 bg-accent hover:bg-blue-600 text-white px-6 py-3 rounded-xl font-semibold transition-all shadow-lg shadow-accent/20">
                <Save className="w-4 h-4" /> Save Hero Section
            </button>
        </div>
    );
};

export default HeroEditor;
