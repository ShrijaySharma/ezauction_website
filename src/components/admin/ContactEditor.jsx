import React, { useState, useEffect } from 'react';
import { Save, Plus, Trash2 } from 'lucide-react';

const ContactEditor = ({ data, onSave }) => {
    const [form, setForm] = useState(data);

    useEffect(() => { setForm(data); }, [data]);

    const update = (key, value) => setForm((p) => ({ ...p, [key]: value }));

    const updatePhone = (index, value) => {
        const updated = [...form.phoneNumbers];
        updated[index] = value;
        update('phoneNumbers', updated);
    };

    const addPhone = () => update('phoneNumbers', [...form.phoneNumbers, '+91 XXXXX XXXXX']);
    const removePhone = (index) => update('phoneNumbers', form.phoneNumbers.filter((_, i) => i !== index));

    return (
        <div className="space-y-8 max-w-3xl">
            {/* Text Content */}
            <div className="bg-white/[0.03] border border-white/[0.06] rounded-2xl p-6 space-y-5">
                <h3 className="text-white font-semibold text-lg">Section Text</h3>

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

                <div>
                    <label className="block text-sm text-slate-400 mb-1">Description</label>
                    <textarea value={form.description} onChange={(e) => update('description', e.target.value)} rows={3}
                        className="w-full px-4 py-2.5 bg-white/5 border border-white/10 rounded-lg text-white focus:outline-none focus:border-accent transition-all resize-none" />
                </div>
            </div>

            {/* Phone Numbers */}
            <div className="bg-white/[0.03] border border-white/[0.06] rounded-2xl p-6 space-y-4">
                <div className="flex items-center justify-between">
                    <h3 className="text-white font-semibold text-lg">Phone Numbers</h3>
                    <button onClick={addPhone} className="flex items-center gap-1 text-accent text-sm hover:text-blue-400 transition-colors">
                        <Plus className="w-4 h-4" /> Add
                    </button>
                </div>
                {form.phoneNumbers.map((phone, i) => (
                    <div key={i} className="flex items-center gap-3">
                        <input value={phone} onChange={(e) => updatePhone(i, e.target.value)}
                            className="flex-1 px-4 py-2.5 bg-white/5 border border-white/10 rounded-lg text-white focus:outline-none focus:border-accent transition-all"
                            placeholder="+91 XXXXX XXXXX" />
                        {form.phoneNumbers.length > 1 && (
                            <button onClick={() => removePhone(i)} className="text-red-400 hover:text-red-300 p-2">
                                <Trash2 className="w-4 h-4" />
                            </button>
                        )}
                    </div>
                ))}
            </div>

            {/* Links */}
            <div className="bg-white/[0.03] border border-white/[0.06] rounded-2xl p-6 space-y-5">
                <h3 className="text-white font-semibold text-lg">Social Links</h3>

                <div>
                    <label className="block text-sm text-slate-400 mb-1">WhatsApp Number (without +)</label>
                    <input value={form.whatsappNumber} onChange={(e) => update('whatsappNumber', e.target.value)}
                        className="w-full px-4 py-2.5 bg-white/5 border border-white/10 rounded-lg text-white focus:outline-none focus:border-accent transition-all"
                        placeholder="e.g., 917697544446" />
                </div>

                <div>
                    <label className="block text-sm text-slate-400 mb-1">WhatsApp Button Text</label>
                    <input value={form.whatsappText} onChange={(e) => update('whatsappText', e.target.value)}
                        className="w-full px-4 py-2.5 bg-white/5 border border-white/10 rounded-lg text-white focus:outline-none focus:border-accent transition-all" />
                </div>

                <div>
                    <label className="block text-sm text-slate-400 mb-1">Instagram URL</label>
                    <input value={form.instagramUrl} onChange={(e) => update('instagramUrl', e.target.value)}
                        className="w-full px-4 py-2.5 bg-white/5 border border-white/10 rounded-lg text-white focus:outline-none focus:border-accent transition-all"
                        placeholder="https://www.instagram.com/..." />
                </div>
            </div>

            <button onClick={() => onSave(form)}
                className="flex items-center gap-2 bg-accent hover:bg-blue-600 text-white px-6 py-3 rounded-xl font-semibold transition-all shadow-lg shadow-accent/20">
                <Save className="w-4 h-4" /> Save Contact Info
            </button>
        </div>
    );
};

export default ContactEditor;
