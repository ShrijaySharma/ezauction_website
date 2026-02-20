import React from 'react';
import '@google/model-viewer';

const CricketModel = ({ className }) => {
    return (
        <div className={className || "w-full h-[400px] flex justify-center items-center"}>
            <model-viewer
                src="/file-1705675155891.glb"
                auto-rotate
                rotation-per-second="20deg"
                camera-controls={false}
                disable-zoom
                interaction-prompt="none"
                exposure="1"
                shadow-intensity="1"
                environment-image="neutral"
                auto-rotate-delay="0"
                loading="lazy"
                class="w-full h-full bg-transparent"
            ></model-viewer>
        </div>
    );
};

export default CricketModel;
