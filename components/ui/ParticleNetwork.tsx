const ParticleNetwork = () => (
    <div className="absolute inset-0 overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-br from-black via-indigo-900 to-black opacity-70"></div>
        <svg className="absolute inset-0 w-full h-full" xmlns="http://www.w3.org/2000/svg">
            <defs>
                <pattern id="network" x="0" y="0" width="100" height="100" patternUnits="userSpaceOnUse">
                    <circle cx="50" cy="50" r="1" fill="#4F46E5" />
                </pattern>
            </defs>
            <rect width="100%" height="100%" fill="url(#network)" />
        </svg>
    </div>
);

export default ParticleNetwork;