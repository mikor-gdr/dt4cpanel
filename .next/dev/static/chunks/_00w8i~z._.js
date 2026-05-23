(globalThis["TURBOPACK"] || (globalThis["TURBOPACK"] = [])).push([typeof document === "object" ? document.currentScript : undefined,
"[project]/constant/colors.ts [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

/**
 * Warna utama Pondok Pesantren Darut Taqwa IV
 * Skema warna: Hijau Zamrud, Hitam Pekat, dengan aksen Emas/Perak
 */ __turbopack_context__.s([
    "colors",
    ()=>colors,
    "tailwindColors",
    ()=>tailwindColors
]);
const colors = {
    // Warna utama - Hijau Zamrud (Emerald Green)
    primary: {
        main: '#009966',
        dark: '#006644',
        light: '#00CC88',
        lighter: '#E6F5F0'
    },
    // Warna kontras - Hitam Pekat (Jet Black)
    dark: {
        main: '#000000',
        secondary: '#0A0A0A',
        text: '#1a1a1a'
    },
    // Warna aksen - Emas (Gold) untuk kemewahan klasik
    accent: {
        gold: '#D4AF37',
        goldLight: '#FFD700',
        goldDark: '#B8860B'
    },
    // Warna aksen alternatif - Perak (Silver) untuk sentuhan modern
    silver: {
        main: '#C0C0C0',
        light: '#E8E8E8',
        dark: '#808080'
    },
    // Warna netral
    neutral: {
        white: '#FFFFFF',
        black: '#000000',
        gray: {
            50: '#F9FAFB',
            100: '#F3F4F6',
            200: '#E5E7EB',
            300: '#D1D5DB',
            400: '#9CA3AF',
            500: '#6B7280',
            600: '#4B5563',
            700: '#374151',
            800: '#1F2937',
            900: '#111827'
        }
    },
    // Warna untuk background dan foreground
    background: {
        light: '#F9FAFB',
        default: '#FFFFFF',
        emerald: '#009966',
        emeraldLight: '#E6F5F0'
    },
    // Warna untuk text
    text: {
        primary: '#000000',
        secondary: '#1a1a1a',
        light: '#4B5563',
        white: '#FFFFFF',
        emerald: '#009966',
        gold: '#D4AF37'
    },
    // Warna untuk border
    border: {
        default: '#E5E7EB',
        emerald: '#009966',
        gold: '#D4AF37',
        dark: '#000000'
    }
};
const tailwindColors = {
    primary: {
        emerald: colors.primary.main,
        emeraldDark: colors.primary.dark,
        emeraldLight: colors.primary.light,
        emeraldLighter: colors.primary.lighter
    },
    accent: {
        gold: colors.accent.gold,
        goldLight: colors.accent.goldLight,
        goldDark: colors.accent.goldDark
    },
    silver: {
        main: colors.silver.main,
        light: colors.silver.light,
        dark: colors.silver.dark
    },
    dark: {
        main: colors.dark.main,
        secondary: colors.dark.secondary,
        text: colors.dark.text
    }
};
if (typeof globalThis.$RefreshHelpers$ === 'object' && globalThis.$RefreshHelpers !== null) {
    __turbopack_context__.k.registerExports(__turbopack_context__.m, globalThis.$RefreshHelpers$);
}
}),
"[project]/lib/Warna.tsx [app-client] (ecmascript) <locals>", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "colorClasses",
    ()=>colorClasses,
    "getColor",
    ()=>getColor,
    "getMainColors",
    ()=>getMainColors,
    "tailwindColors",
    ()=>tailwindColors
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$constant$2f$colors$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/constant/colors.ts [app-client] (ecmascript)");
;
const getMainColors = ()=>({
        primary: __TURBOPACK__imported__module__$5b$project$5d2f$constant$2f$colors$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["colors"].primary.main,
        dark: __TURBOPACK__imported__module__$5b$project$5d2f$constant$2f$colors$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["colors"].dark.main,
        accent: __TURBOPACK__imported__module__$5b$project$5d2f$constant$2f$colors$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["colors"].accent.gold
    });
const colorClasses = {
    // Background colors - Hijau Zamrud (dari colors.primary)
    bg: {
        primary: "bg-[#009966]",
        primaryDark: "bg-[#006644]",
        primaryLight: "bg-[#00CC88]",
        primaryLighter: "bg-[#E6F5F0]",
        accent: "bg-[#D4AF37]",
        accentLight: "bg-[#FFD700]",
        silver: "bg-[#C0C0C0]",
        dark: "bg-[#000000]",
        white: "bg-white",
        light: "bg-[#F9FAFB]"
    },
    // Text colors (dari colors.text dan colors.dark)
    text: {
        primary: "text-[#000000]",
        secondary: "text-[#1a1a1a]",
        light: "text-[#4B5563]",
        white: "text-white",
        emerald: "text-[#009966]",
        gold: "text-[#D4AF37]",
        silver: "text-[#C0C0C0]"
    },
    // Border colors (dari colors.border)
    border: {
        default: "border-[#E5E7EB]",
        emerald: "border-[#009966]",
        gold: "border-[#D4AF37]",
        silver: "border-[#C0C0C0]",
        dark: "border-[#000000]"
    },
    // Hover colors
    hover: {
        primary: "hover:bg-[#006644]",
        primaryLight: "hover:bg-[#00CC88]",
        accent: "hover:bg-[#B8860B]",
        textEmerald: "hover:text-[#009966]",
        textGold: "hover:text-[#D4AF37]"
    }
};
const tailwindColors = {
    primary: {
        emerald: __TURBOPACK__imported__module__$5b$project$5d2f$constant$2f$colors$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["colors"].primary.main,
        emeraldDark: __TURBOPACK__imported__module__$5b$project$5d2f$constant$2f$colors$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["colors"].primary.dark,
        emeraldLight: __TURBOPACK__imported__module__$5b$project$5d2f$constant$2f$colors$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["colors"].primary.light,
        emeraldLighter: __TURBOPACK__imported__module__$5b$project$5d2f$constant$2f$colors$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["colors"].primary.lighter
    },
    accent: {
        gold: __TURBOPACK__imported__module__$5b$project$5d2f$constant$2f$colors$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["colors"].accent.gold,
        goldLight: __TURBOPACK__imported__module__$5b$project$5d2f$constant$2f$colors$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["colors"].accent.goldLight,
        goldDark: __TURBOPACK__imported__module__$5b$project$5d2f$constant$2f$colors$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["colors"].accent.goldDark
    },
    silver: {
        main: __TURBOPACK__imported__module__$5b$project$5d2f$constant$2f$colors$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["colors"].silver.main,
        light: __TURBOPACK__imported__module__$5b$project$5d2f$constant$2f$colors$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["colors"].silver.light,
        dark: __TURBOPACK__imported__module__$5b$project$5d2f$constant$2f$colors$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["colors"].silver.dark
    },
    dark: {
        main: __TURBOPACK__imported__module__$5b$project$5d2f$constant$2f$colors$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["colors"].dark.main,
        secondary: __TURBOPACK__imported__module__$5b$project$5d2f$constant$2f$colors$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["colors"].dark.secondary,
        text: __TURBOPACK__imported__module__$5b$project$5d2f$constant$2f$colors$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["colors"].dark.text
    }
};
const getColor = (path)=>{
    return __TURBOPACK__imported__module__$5b$project$5d2f$constant$2f$colors$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["colors"][path];
};
;
if (typeof globalThis.$RefreshHelpers$ === 'object' && globalThis.$RefreshHelpers !== null) {
    __turbopack_context__.k.registerExports(__turbopack_context__.m, globalThis.$RefreshHelpers$);
}
}),
"[project]/lib/File.tsx [app-client] (ecmascript) <locals>", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "BG_IMAGE_PATH",
    ()=>BG_IMAGE_PATH,
    "LOGO_PATH",
    ()=>LOGO_PATH,
    "PONDOK_INFO",
    ()=>PONDOK_INFO,
    "PONDOK_PHOTO_PATH",
    ()=>PONDOK_PHOTO_PATH,
    "YAYASAN_INFO",
    ()=>YAYASAN_INFO
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$Warna$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$locals$3e$__ = __turbopack_context__.i("[project]/lib/Warna.tsx [app-client] (ecmascript) <locals>");
;
const LOGO_PATH = "/logodt4.webp";
const BG_IMAGE_PATH = "/bg.jpg";
const PONDOK_PHOTO_PATH = "/ganti_gambar.jpg";
const YAYASAN_INFO = {
    name: "Yayasan Darut Taqwa",
    shortName: "Darut Taqwa 4",
    location: "Desa Modopuro, Kecamatan Mojosari, Kabupaten Mojokerto",
    fullName: "Yayasan Darut Taqwa - Desa Modopuro, Kecamatan Mojosari, Kabupaten Mojokerto",
    founded: 1998,
    leader: "Romo KH. Dhofir Bahruddin"
};
const PONDOK_INFO = YAYASAN_INFO;
if (typeof globalThis.$RefreshHelpers$ === 'object' && globalThis.$RefreshHelpers !== null) {
    __turbopack_context__.k.registerExports(__turbopack_context__.m, globalThis.$RefreshHelpers$);
}
}),
"[project]/components/Header.tsx [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "default",
    ()=>__TURBOPACK__default__export__
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/compiled/react/jsx-dev-runtime.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$client$2f$app$2d$dir$2f$link$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/client/app-dir/link.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$image$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/image.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/compiled/react/index.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$File$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$locals$3e$__ = __turbopack_context__.i("[project]/lib/File.tsx [app-client] (ecmascript) <locals>");
;
var _s = __turbopack_context__.k.signature();
"use client";
;
;
;
;
const Header = ()=>{
    _s();
    const [isMenuOpen, setIsMenuOpen] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])(false);
    const navItems = [
        {
            href: "/",
            label: "Home"
        },
        {
            href: "/#profil",
            label: "Profil"
        },
        {
            href: "/#lembaga",
            label: "Lembaga"
        },
        {
            href: "/#program",
            label: "Program"
        },
        {
            href: "/#berita",
            label: "Berita"
        },
        {
            href: "/#kontak",
            label: "Kontak"
        }
    ];
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("header", {
        className: "sticky top-0 z-50 bg-black/95 backdrop-blur-md shadow-lg border-b-2 border-[#009966]/30",
        children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("nav", {
            className: "container mx-auto px-4 py-4",
            children: [
                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                    className: "flex items-center justify-between",
                    children: [
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$client$2f$app$2d$dir$2f$link$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"], {
                            href: "/",
                            className: "flex items-center space-x-3 group",
                            children: [
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                    className: "relative h-14 w-14 flex-shrink-0 rounded-xl bg-[#009966]/20 p-2 group-hover:bg-[#009966] transition-colors border border-[#009966]/30",
                                    children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$image$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"], {
                                        src: __TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$File$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$locals$3e$__["LOGO_PATH"],
                                        alt: `Logo ${__TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$File$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$locals$3e$__["PONDOK_INFO"].shortName}`,
                                        // fill
                                        width: 500,
                                        height: 500,
                                        className: "object-contain p-1",
                                        priority: true
                                    }, void 0, false, {
                                        fileName: "[project]/components/Header.tsx",
                                        lineNumber: 29,
                                        columnNumber: 15
                                    }, ("TURBOPACK compile-time value", void 0))
                                }, void 0, false, {
                                    fileName: "[project]/components/Header.tsx",
                                    lineNumber: 28,
                                    columnNumber: 13
                                }, ("TURBOPACK compile-time value", void 0)),
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                    className: "hidden sm:block",
                                    children: [
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("h1", {
                                            className: "text-xl font-black text-white group-hover:text-[#009966] transition-colors",
                                            children: __TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$File$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$locals$3e$__["PONDOK_INFO"].shortName
                                        }, void 0, false, {
                                            fileName: "[project]/components/Header.tsx",
                                            lineNumber: 40,
                                            columnNumber: 15
                                        }, ("TURBOPACK compile-time value", void 0)),
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                            className: "text-xs text-white/70 font-medium",
                                            children: __TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$File$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$locals$3e$__["PONDOK_INFO"].location
                                        }, void 0, false, {
                                            fileName: "[project]/components/Header.tsx",
                                            lineNumber: 43,
                                            columnNumber: 15
                                        }, ("TURBOPACK compile-time value", void 0))
                                    ]
                                }, void 0, true, {
                                    fileName: "[project]/components/Header.tsx",
                                    lineNumber: 39,
                                    columnNumber: 13
                                }, ("TURBOPACK compile-time value", void 0))
                            ]
                        }, void 0, true, {
                            fileName: "[project]/components/Header.tsx",
                            lineNumber: 27,
                            columnNumber: 11
                        }, ("TURBOPACK compile-time value", void 0)),
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                            className: "hidden md:flex items-center space-x-8",
                            children: [
                                navItems.map((item)=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$client$2f$app$2d$dir$2f$link$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"], {
                                        href: item.href,
                                        className: "text-white font-semibold hover:text-[#009966] transition-colors relative group",
                                        children: [
                                            item.label,
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                className: "absolute bottom-0 left-0 w-0 h-0.5 bg-[#009966] group-hover:w-full transition-all"
                                            }, void 0, false, {
                                                fileName: "[project]/components/Header.tsx",
                                                lineNumber: 58,
                                                columnNumber: 17
                                            }, ("TURBOPACK compile-time value", void 0))
                                        ]
                                    }, item.href, true, {
                                        fileName: "[project]/components/Header.tsx",
                                        lineNumber: 52,
                                        columnNumber: 15
                                    }, ("TURBOPACK compile-time value", void 0))),
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$client$2f$app$2d$dir$2f$link$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"], {
                                    href: "/daftar",
                                    className: "px-6 py-2.5 rounded-lg bg-[#009966] text-white font-bold hover:bg-[#006644] transition-all transform hover:scale-105 shadow-lg",
                                    children: "Daftar"
                                }, void 0, false, {
                                    fileName: "[project]/components/Header.tsx",
                                    lineNumber: 61,
                                    columnNumber: 13
                                }, ("TURBOPACK compile-time value", void 0))
                            ]
                        }, void 0, true, {
                            fileName: "[project]/components/Header.tsx",
                            lineNumber: 50,
                            columnNumber: 11
                        }, ("TURBOPACK compile-time value", void 0)),
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                            onClick: ()=>setIsMenuOpen(!isMenuOpen),
                            className: "md:hidden p-2 text-white hover:text-[#009966] transition-colors",
                            "aria-label": "Toggle menu",
                            "aria-expanded": isMenuOpen,
                            children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("svg", {
                                className: "w-6 h-6",
                                fill: "none",
                                stroke: "currentColor",
                                viewBox: "0 0 24 24",
                                children: isMenuOpen ? /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("path", {
                                    strokeLinecap: "round",
                                    strokeLinejoin: "round",
                                    strokeWidth: 2,
                                    d: "M6 18L18 6M6 6l12 12"
                                }, void 0, false, {
                                    fileName: "[project]/components/Header.tsx",
                                    lineNumber: 83,
                                    columnNumber: 17
                                }, ("TURBOPACK compile-time value", void 0)) : /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("path", {
                                    strokeLinecap: "round",
                                    strokeLinejoin: "round",
                                    strokeWidth: 2,
                                    d: "M4 6h16M4 12h16M4 18h16"
                                }, void 0, false, {
                                    fileName: "[project]/components/Header.tsx",
                                    lineNumber: 90,
                                    columnNumber: 17
                                }, ("TURBOPACK compile-time value", void 0))
                            }, void 0, false, {
                                fileName: "[project]/components/Header.tsx",
                                lineNumber: 76,
                                columnNumber: 13
                            }, ("TURBOPACK compile-time value", void 0))
                        }, void 0, false, {
                            fileName: "[project]/components/Header.tsx",
                            lineNumber: 70,
                            columnNumber: 11
                        }, ("TURBOPACK compile-time value", void 0))
                    ]
                }, void 0, true, {
                    fileName: "[project]/components/Header.tsx",
                    lineNumber: 25,
                    columnNumber: 9
                }, ("TURBOPACK compile-time value", void 0)),
                isMenuOpen && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                    className: "md:hidden mt-4 pb-4 space-y-2 bg-black/95 rounded-lg border-2 border-[#009966]/30 p-4 backdrop-blur-md",
                    children: [
                        navItems.map((item)=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$client$2f$app$2d$dir$2f$link$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"], {
                                href: item.href,
                                onClick: ()=>setIsMenuOpen(false),
                                className: "block py-3 px-4 text-white font-semibold hover:text-[#009966] hover:bg-[#009966]/10 rounded-lg transition-all",
                                children: item.label
                            }, item.href, false, {
                                fileName: "[project]/components/Header.tsx",
                                lineNumber: 105,
                                columnNumber: 15
                            }, ("TURBOPACK compile-time value", void 0))),
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$client$2f$app$2d$dir$2f$link$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"], {
                            href: "daftar",
                            onClick: ()=>setIsMenuOpen(false),
                            className: "block px-6 py-3 rounded-lg bg-[#009966] text-white font-bold hover:bg-[#006644] transition-colors text-center mt-4",
                            children: "Daftar"
                        }, void 0, false, {
                            fileName: "[project]/components/Header.tsx",
                            lineNumber: 114,
                            columnNumber: 13
                        }, ("TURBOPACK compile-time value", void 0))
                    ]
                }, void 0, true, {
                    fileName: "[project]/components/Header.tsx",
                    lineNumber: 103,
                    columnNumber: 11
                }, ("TURBOPACK compile-time value", void 0))
            ]
        }, void 0, true, {
            fileName: "[project]/components/Header.tsx",
            lineNumber: 24,
            columnNumber: 7
        }, ("TURBOPACK compile-time value", void 0))
    }, void 0, false, {
        fileName: "[project]/components/Header.tsx",
        lineNumber: 23,
        columnNumber: 5
    }, ("TURBOPACK compile-time value", void 0));
};
_s(Header, "vK10R+uCyHfZ4DZVnxbYkMWJB8g=");
_c = Header;
const __TURBOPACK__default__export__ = Header;
var _c;
__turbopack_context__.k.register(_c, "Header");
if (typeof globalThis.$RefreshHelpers$ === 'object' && globalThis.$RefreshHelpers !== null) {
    __turbopack_context__.k.registerExports(__turbopack_context__.m, globalThis.$RefreshHelpers$);
}
}),
]);

//# sourceMappingURL=_00w8i~z._.js.map