import React, { useState, useEffect } from 'react';
import { Save } from 'lucide-react';

const CTAEditor = ({ data, onSave }) => {
    const [form, setForm] = useState(data);

    useEffect(() => { setForm(data); }, [data]);

    const update = (key, value) => setForm((p) => ({ ...p, [key]: value }));

    return (
        <div className="space-y-8 max-w-3xl">
            <div className="bg-white/[0.03] border border-white/[0.06] rounded-2xl p-6 space-y-5">
                <h3 className="text-white font-semibold text-lg">CTA Content</h3>

                <div>
                    <label className="block text-sm text-slate-400 mb-1">Heading</label>
                    <input value={form.heading} onChange={(e) => update('heading', e.target.value)}
                        className="w-full px-4 py-2.5 bg-white/5 border border-white/10 rounded-lg text-white focus:outline-none focus:border-accent transition-all" />
                </div>

                <div>
                    <label className="block text-sm text-slate-400 mb-1">Accent Word (gradient text)</label>
                    <input value={form.headingAccent} onChange={(e) => update('headingAccent', e.target.value)}
                        className="w-full px-4 py-2.5 bg-white/5 border border-white/10 rounded-lg text-white focus:outline-none focus:border-accent transition-all" />
                </div>

                <div>
                    <label className="block text-sm text-slate-400 mb-1">Description</label>
                    <textarea value={form.description} onChange={(e) => update('description', e.target.value)} rows={3}
                        className="w-full px-4 py-2.5 bg-white/5 border border-white/10 rounded-lg text-white focus:outline-none focus:border-accent transition-all resize-none" />
                </div>

                <div>
                    <label className="block text-sm text-slate-400 mb-1">Button Text</label>
                    <input value={form.buttonText} onChange={(e) => update('buttonText', e.target.value)}
                        className="w-full px-4 py-2.5 bg-white/5 border border-white/10 rounded-lg text-white focus:outline-none focus:border-accent transition-all" />
                </div>
            </div>

            <button onClick={() => onSave(form)}
                className="flex items-center gap-2 bg-accent hover:bg-blue-600 text-white px-6 py-3 rounded-xl font-semibold transition-all shadow-lg shadow-accent/20">
                <Save className="w-4 h-4" /> Save CTA Section
            </button>
        </div>
    );
};

export default CTAEditor;
