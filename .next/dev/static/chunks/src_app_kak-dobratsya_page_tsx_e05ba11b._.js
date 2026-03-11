(globalThis.TURBOPACK || (globalThis.TURBOPACK = [])).push([typeof document === "object" ? document.currentScript : undefined,
"[project]/src/app/kak-dobratsya/page.tsx [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "default",
    ()=>KakDobratsya
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/compiled/react/jsx-dev-runtime.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/compiled/react/index.js [app-client] (ecmascript)");
;
var _s = __turbopack_context__.k.signature();
"use client";
;
const DESTINATION = [
    56.728767,
    36.827567
];
function KakDobratsya() {
    _s();
    const mapRef = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useRef"])(null);
    const mapInstance = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useRef"])(null);
    const routePanelRef = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useRef"])(null);
    const [from, setFrom] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])("");
    const [input, setInput] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])("");
    const [ymapsLoaded, setYmapsLoaded] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])(false);
    const [error, setError] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])("");
    (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useEffect"])({
        "KakDobratsya.useEffect": ()=>{
            if ("TURBOPACK compile-time falsy", 0) //TURBOPACK unreachable
            ;
            if (window.ymaps) {
                setYmapsLoaded(true);
                return;
            }
            const script = document.createElement("script");
            script.src = "https://api-maps.yandex.ru/2.1/?lang=ru_RU&apikey=1d251639-e01e-4a4a-a3ec-652334aa5f86";
            script.async = true;
            script.onload = ({
                "KakDobratsya.useEffect": ()=>setYmapsLoaded(true)
            })["KakDobratsya.useEffect"];
            document.body.appendChild(script);
            return ({
                "KakDobratsya.useEffect": ()=>{
                // не удаляем script принудительно
                }
            })["KakDobratsya.useEffect"];
        }
    }["KakDobratsya.useEffect"], []);
    (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useEffect"])({
        "KakDobratsya.useEffect": ()=>{
            if (!ymapsLoaded || !mapRef.current || mapInstance.current) return;
            window.ymaps.ready({
                "KakDobratsya.useEffect": ()=>{
                    const map = new window.ymaps.Map(mapRef.current, {
                        center: DESTINATION,
                        zoom: 12,
                        controls: [
                            "zoomControl",
                            "routePanelControl"
                        ]
                    });
                    map.geoObjects.add(new window.ymaps.Placemark(DESTINATION, {
                        balloonContent: "СНТ Речицы"
                    }, {
                        preset: "islands#redDotIcon"
                    }));
                    const routePanel = map.controls.get("routePanelControl");
                    routePanel.routePanel.state.set({
                        type: "auto",
                        fromEnabled: true,
                        toEnabled: false,
                        to: DESTINATION
                    });
                    mapInstance.current = map;
                    routePanelRef.current = routePanel;
                }
            }["KakDobratsya.useEffect"]);
            return ({
                "KakDobratsya.useEffect": ()=>{
                    if (mapInstance.current && typeof mapInstance.current.destroy === "function") {
                        mapInstance.current.destroy();
                        mapInstance.current = null;
                    }
                }
            })["KakDobratsya.useEffect"];
        }
    }["KakDobratsya.useEffect"], [
        ymapsLoaded
    ]);
    (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useEffect"])({
        "KakDobratsya.useEffect": ()=>{
            if (routePanelRef.current) {
                routePanelRef.current.routePanel.state.set({
                    from
                });
            }
        }
    }["KakDobratsya.useEffect"], [
        from
    ]);
    const handleSubmit = (e)=>{
        e.preventDefault();
        if (!input.trim()) {
            setError("Введите адрес отправления");
            return;
        }
        setError("");
        setFrom(input.trim());
    };
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("main", {
        children: [
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("h1", {
                className: "text-3xl font-bold mb-8 text-cyan-700",
                children: "Как добраться до СНТ «Речицы»"
            }, void 0, false, {
                fileName: "[project]/src/app/kak-dobratsya/page.tsx",
                lineNumber: 143,
                columnNumber: 7
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("form", {
                onSubmit: handleSubmit,
                className: "mb-6 flex flex-col md:flex-row gap-4 items-center",
                children: [
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("input", {
                        type: "text",
                        value: input,
                        onChange: (e)=>setInput(e.target.value),
                        placeholder: "Введите адрес отправления (например, Конаково, Тверь, Москва)",
                        className: "border border-cyan-300 rounded-lg px-4 py-2 focus:outline-none focus:ring-2 focus:ring-cyan-400 w-full md:w-1/2 transition"
                    }, void 0, false, {
                        fileName: "[project]/src/app/kak-dobratsya/page.tsx",
                        lineNumber: 145,
                        columnNumber: 9
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                        type: "submit",
                        className: "bg-cyan-600 text-white px-4 py-2 rounded-lg hover:bg-cyan-700 transition",
                        children: "Построить маршрут"
                    }, void 0, false, {
                        fileName: "[project]/src/app/kak-dobratsya/page.tsx",
                        lineNumber: 152,
                        columnNumber: 9
                    }, this)
                ]
            }, void 0, true, {
                fileName: "[project]/src/app/kak-dobratsya/page.tsx",
                lineNumber: 144,
                columnNumber: 7
            }, this),
            error && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                className: "text-red-600 mb-4",
                children: error
            }, void 0, false, {
                fileName: "[project]/src/app/kak-dobratsya/page.tsx",
                lineNumber: 159,
                columnNumber: 17
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                ref: mapRef,
                className: "w-full h-[480px] rounded-xl shadow bg-cyan-50"
            }, void 0, false, {
                fileName: "[project]/src/app/kak-dobratsya/page.tsx",
                lineNumber: 160,
                columnNumber: 7
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                className: "mt-4 text-gray-700 text-sm",
                children: [
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("b", {
                        children: "Адрес СНТ «Речицы»:"
                    }, void 0, false, {
                        fileName: "[project]/src/app/kak-dobratsya/page.tsx",
                        lineNumber: 162,
                        columnNumber: 9
                    }, this),
                    " Тверская область, Конаковский район, деревня Речицы",
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("br", {}, void 0, false, {
                        fileName: "[project]/src/app/kak-dobratsya/page.tsx",
                        lineNumber: 162,
                        columnNumber: 87
                    }, this),
                    "Координаты: 56.728767, 36.827567"
                ]
            }, void 0, true, {
                fileName: "[project]/src/app/kak-dobratsya/page.tsx",
                lineNumber: 161,
                columnNumber: 7
            }, this)
        ]
    }, void 0, true, {
        fileName: "[project]/src/app/kak-dobratsya/page.tsx",
        lineNumber: 142,
        columnNumber: 5
    }, this);
}
_s(KakDobratsya, "HtjKkBzrPlEUEjwdcFz6VxXa4/A=");
_c = KakDobratsya;
var _c;
__turbopack_context__.k.register(_c, "KakDobratsya");
if (typeof globalThis.$RefreshHelpers$ === 'object' && globalThis.$RefreshHelpers !== null) {
    __turbopack_context__.k.registerExports(__turbopack_context__.m, globalThis.$RefreshHelpers$);
}
}),
]);

//# sourceMappingURL=src_app_kak-dobratsya_page_tsx_e05ba11b._.js.map