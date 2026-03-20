import React, { useState, useEffect } from 'react';
import { Save, Plus, Trash2, ArrowUp, ArrowDown } from 'lucide-react';
import { gradientOptions } from '../../data/siteContent';

const SuccessStoriesEditor = ({ data, onSave }) => {
    const [form, setForm] = useState(data);

    useEffect(() => { setForm(data); }, [data]);

    const update = (key, value) => setForm((p) => ({ ...p, [key]: value }));

    const updateStory = (index, key, value) => {
        const updated = [...form.stories];
        updated[index] = { ...updated[index], [key]: value };
        update('stories', updated);
    };

    const addStory = () => {
        const gradientIndex = form.stories.length % gradientOptions.length;
        update('stories', [...form.stories, {
            title: 'New Tournament',
            role: 'Tournament Type',
            date: new Date().toLocaleDateString('en-US', { month: 'short', year: 'numeric' }).toUpperCase(),
            description: 'Description of the tournament.',
            gradient: gradientOptions[gradientIndex],
        }]);
    };

    const removeStory = (index) => {
        if (form.stories.length <= 1) return;
        update('stories', form.stories.filter((_, i) => i !== index));
    };

    const moveStory = (index, direction) => {
        const newIndex = index + direction;
        if (newIndex < 0 || newIndex >= form.stories.length) return;
        const updated = [...form.stories];
        [updated[index], updated[newIndex]] = [updated[newIndex], updated[index]];
        update('stories', updated);
    };

    return (
        <div className="space-y-8 max-w-3xl">
            {/* Section Header */}
            <div className="bg-white/[0.03] border border-white/[0.06] rounded-2xl p-6 space-y-5">
                <h3 className="text-white font-semibold text-lg">Section Header</h3>
                <div className="grid md:grid-cols-2 gap-4">
                    <div>
                        <label className="block text-sm text-slate-400 mb-1">Badge Text</label>
                        <input value={form.badgeText} onChange={(e) => update('badgeText', e.target.value)}
                            className="w-full px-4 py-2.5 bg-white/5 border border-white/10 rounded-lg text-white focus:outline-none focus:border-accent transition-all" />
                    </div>
                    <div>
                        <label className="block text-sm text-slate-400 mb-1">Heading</label>
                        <input value={form.heading} onChange={(e) => update('heading', e.target.value)}
                            className="w-full px-4 py-2.5 bg-white/5 border border-white/10 rounded-lg text-white focus:outline-none focus:border-accent transition-all" />
                    </div>
                </div>
                <div>
                    <label className="block text-sm text-slate-400 mb-1">Description</label>
                    <textarea value={form.description} onChange={(e) => update('description', e.target.value)} rows={2}
                        className="w-full px-4 py-2.5 bg-white/5 border border-white/10 rounded-lg text-white focus:outline-none focus:border-accent transition-all resize-none" />
                </div>
            </div>

            {/* Story Cards */}
            <div className="bg-white/[0.03] border border-white/[0.06] rounded-2xl p-6 space-y-4">
                <div className="flex items-center justify-between">
                    <h3 className="text-white font-semibold text-lg">Story Cards ({form.stories.length})</h3>
                    <button onClick={addStory} className="flex items-center gap-1 text-accent text-sm hover:text-blue-400 transition-colors">
                        <Plus className="w-4 h-4" /> Add Story
                    </button>
                </div>

                <p className="text-slate-500 text-xs">
                    Cards auto-adjust their layout based on count. Reorder with the arrows.
                </p>

                {form.stories.map((story, i) => (
                    <div key={i} className="bg-white/[0.02] border border-white/[0.05] rounded-xl p-4 space-y-3">
                        <div className="flex items-center justify-between">
                            <span className="text-slate-400 text-sm font-medium">Story {i + 1}</span>
                            <div className="flex items-center gap-1">
                                <button onClick={() => moveStory(i, -1)} disabled={i === 0}
                                    className="text-slate-400 hover:text-white p-1 disabled:opacity-20 transition-colors">
                                    <ArrowUp className="w-4 h-4" />
                                </button>
                                <button onClick={() => moveStory(i, 1)} disabled={i === form.stories.length - 1}
                                    className="text-slate-400 hover:text-white p-1 disabled:opacity-20 transition-colors">
                                    <ArrowDown className="w-4 h-4" />
                                </button>
                                <button onClick={() => removeStory(i)} disabled={form.stories.length <= 1}
                                    className="text-red-400 hover:text-red-300 p-1 disabled:opacity-20 transition-colors ml-2">
                                    <Trash2 className="w-4 h-4" />
                                </button>
                            </div>
                        </div>
                        <div className="grid md:grid-cols-2 gap-3">
                            <div>
                                <label className="block text-xs text-slate-500 mb-1">Title</label>
                                <input value={story.title} onChange={(e) => updateStory(i, 'title', e.target.value)}
                                    className="w-full px-3 py-2 bg-white/5 border border-white/10 rounded-lg text-white text-sm focus:outline-none focus:border-accent transition-all" />
                            </div>
                            <div>
                                <label className="block text-xs text-slate-500 mb-1">Role / Type</label>
                                <input value={story.role} onChange={(e) => updateStory(i, 'role', e.target.value)}
                                    className="w-full px-3 py-2 bg-white/5 border border-white/10 rounded-lg text-white text-sm focus:outline-none focus:border-accent transition-all" />
                            </div>
                        </div>
                        <div className="grid md:grid-cols-2 gap-3">
                            <div>
                                <label className="block text-xs text-slate-500 mb-1">Date</label>
                                <input value={story.date} onChange={(e) => updateStory(i, 'date', e.target.value)}
                                    className="w-full px-3 py-2 bg-white/5 border border-white/10 rounded-lg text-white text-sm focus:outline-none focus:border-accent transition-all"
                                    placeholder="e.g., MAR 2026" />
                            </div>
                            <div>
                                <label className="block text-xs text-slate-500 mb-1">Gradient Color</label>
                                <select value={story.gradient} onChange={(e) => updateStory(i, 'gradient', e.target.value)}
                                    className="w-full px-3 py-2 bg-white/5 border border-white/10 rounded-lg text-white text-sm focus:outline-none focus:border-accent transition-all">
                                    {gradientOptions.map((g) => (
                                        <option key={g} value={g} className="bg-slate-800">{g.replace('from-', '').replace(' to-', ' → ').replace(/-500/g, '')}</option>
                                    ))}
                                </select>
                            </div>
                        </div>
                        <div>
                            <label className="block text-xs text-slate-500 mb-1">Description</label>
                            <textarea value={story.description} onChange={(e) => updateStory(i, 'description', e.target.value)} rows={2}
                                className="w-full px-3 py-2 bg-white/5 border border-white/10 rounded-lg text-white text-sm focus:outline-none focus:border-accent transition-all resize-none" />
                        </div>
                    </div>
                ))}
            </div>

            <button onClick={() => onSave(form)}
                className="flex items-center gap-2 bg-accent hover:bg-blue-600 text-white px-6 py-3 rounded-xl font-semibold transition-all shadow-lg shadow-accent/20">
                <Save className="w-4 h-4" /> Save Success Stories
            </button>
        </div>
    );
};

export default SuccessStoriesEditor;
