// ULTRA-FAST ANTI-DETECTION AUTO-PURCHASE SYSTEM
// Short delays (10-25s) with EXTREME human behavior simulation
// Version: 4.0 - Hyper Stealth Mode

(function () {
    'use strict';

    // ═══════════════════════════════════════════════════════════
    // OPTIMIZED ANTI-DETECTION SETTINGS
    // ═══════════════════════════════════════════════════════════

    const CONFIG = {
        // SHORT base delays (10-25s) with EXTREME randomization
        baseDelayUpsell2: 17500,     // 17.5s base → 10.5-24.5s (±40%)
        baseDelayUpsell3: 17500,     // 17.5s base → 10.5-24.5s (±40%)

        // EXTREME random variation (±40% to avoid patterns)
        randomVariation: 0.4,

        // INTENSE human behavior simulation
        mouseMovements: {
            enabled: true,
            count: 25,              // DOUBLE movements (was 15)
            interval: 300,          // Faster (was 800ms)
            randomness: 0.5         // 50% variation (was 30%)
        },

        scrollBehavior: {
            enabled: true,
            times: 8,               // MORE scrolls (was 5)
            interval: 400,          // Faster (was 1500ms)
            randomness: 0.5         // 50% variation
        },

        videoTracking: {
            enabled: false,         // DISABLED for speed (was true)
            minWatchTime: 10000,    // If enabled: only 10s (was 30s)
            checkInterval: 2000     // Checks faster (was 5s)
        },

        // Maximum attempts to find button
        maxAttempts: 200,
        checkInterval: 300
    };

    // ═══════════════════════════════════════════════════════════
    // UTILITIES
    // ═══════════════════════════════════════════════════════════

    // Generates random delay based on base value
    function getRandomDelay(baseDelay) {
        const variation = baseDelay * CONFIG.randomVariation;
        const randomOffset = (Math.random() - 0.5) * 2 * variation;
        return Math.floor(baseDelay + randomOffset);
    }

    // Generates random position in viewport
    function getRandomPosition() {
        return {
            x: Math.floor(Math.random() * window.innerWidth),
            y: Math.floor(Math.random() * window.innerHeight)
        };
    }

    // Simulates smooth mouse movement
    function simulateMouseMovement(targetElement, callback) {
        if (!CONFIG.mouseMovements.enabled) {
            callback();
            return;
        }

        console.log('[Stealth] Starting mouse movement simulation...');
        let movementCount = 0;
        const totalMovements = CONFIG.mouseMovements.count;

        const moveInterval = setInterval(() => {
            const pos = getRandomPosition();

            // Dispatches mousemove event
            const moveEvent = new MouseEvent('mousemove', {
                view: window,
                bubbles: true,
                cancelable: true,
                clientX: pos.x,
                clientY: pos.y
            });
            document.dispatchEvent(moveEvent);

            movementCount++;

            if (movementCount >= totalMovements) {
                clearInterval(moveInterval);
                console.log('[Stealth] Mouse movements completed (', totalMovements, 'movements)');

                // Wait a bit before continuing
                setTimeout(callback, getRandomDelay(1000));
            }
        }, getRandomDelay(CONFIG.mouseMovements.interval));
    }

    // Simulates natural scrolls
    function simulateScrolling(callback) {
        if (!CONFIG.scrollBehavior.enabled) {
            callback();
            return;
        }

        console.log('[Stealth] Starting scroll simulation...');
        let scrollCount = 0;
        const totalScrolls = CONFIG.scrollBehavior.times;

        const scrollInterval = setInterval(() => {
            const scrollAmount = Math.floor(Math.random() * 300) + 100;
            const direction = Math.random() > 0.5 ? 1 : -1;

            window.scrollBy({
                top: scrollAmount * direction,
                behavior: 'smooth'
            });

            scrollCount++;

            if (scrollCount >= totalScrolls) {
                clearInterval(scrollInterval);
                console.log('[Stealth] Scrolls completed (', totalScrolls, 'scrolls)');

                // Returns to top smoothly
                setTimeout(() => {
                    window.scrollTo({ top: 0, behavior: 'smooth' });
                    setTimeout(callback, 1000);
                }, 500);
            }
        }, getRandomDelay(CONFIG.scrollBehavior.interval));
    }

    // Monitors video progress (if available)
    function checkVideoProgress() {
        const videoPlayer = document.querySelector('video');
        if (videoPlayer && videoPlayer.currentTime) {
            const watchedTime = videoPlayer.currentTime * 1000;
            console.log('[Stealth] Video watched:', Math.floor(watchedTime / 1000), 'seconds');
            return watchedTime >= CONFIG.videoTracking.minWatchTime;
        }
        return true; // If no video, allows to continue
    }

    // ═══════════════════════════════════════════════════════════
    // ULTRA-REALISTIC CLICK
    // ═══════════════════════════════════════════════════════════

    function executeStealthClick(element, callback) {
        console.log('[Stealth] 🎯 Preparing ultra-realistic click...');

        // 1. Smooth scroll to element
        element.scrollIntoView({ behavior: 'smooth', block: 'center' });

        setTimeout(() => {
            // 2. Mouse movement to element
            const rect = element.getBoundingClientRect();
            const targetX = rect.left + rect.width / 2;
            const targetY = rect.top + rect.height / 2;

            // Simulates mouse trajectory
            let currentX = Math.random() * window.innerWidth;
            let currentY = Math.random() * window.innerHeight;
            let step = 0;
            const steps = 20;

            const mousePath = setInterval(() => {
                step++;
                const progress = step / steps;

                currentX += (targetX - currentX) * 0.3;
                currentY += (targetY - currentY) * 0.3;

                const moveEvent = new MouseEvent('mousemove', {
                    view: window,
                    bubbles: true,
                    cancelable: true,
                    clientX: currentX,
                    clientY: currentY
                });
                document.dispatchEvent(moveEvent);

                if (step >= steps) {
                    clearInterval(mousePath);

                    // 3. Hover over element
                    setTimeout(() => {
                        const hoverEvent = new MouseEvent('mouseenter', {
                            view: window,
                            bubbles: true,
                            cancelable: true
                        });
                        element.dispatchEvent(hoverEvent);

                        // 4. MouseOver
                        setTimeout(() => {
                            const overEvent = new MouseEvent('mouseover', {
                                view: window,
                                bubbles: true,
                                cancelable: true
                            });
                            element.dispatchEvent(overEvent);

                            // 5. Focus (if applicable)
                            if (element.focus) {
                                element.focus();
                            }

                            // 6. MouseDown (press)
                            setTimeout(() => {
                                const downEvent = new MouseEvent('mousedown', {
                                    view: window,
                                    bubbles: true,
                                    cancelable: true,
                                    button: 0,
                                    buttons: 1
                                });
                                element.dispatchEvent(downEvent);

                                // 7. Small delay (human pressure time - 100-200ms)
                                setTimeout(() => {
                                    // 8. MouseUp (release)
                                    const upEvent = new MouseEvent('mouseup', {
                                        view: window,
                                        bubbles: true,
                                        cancelable: true,
                                        button: 0,
                                        buttons: 0
                                    });
                                    element.dispatchEvent(upEvent);

                                    // 9. Click Event
                                    setTimeout(() => {
                                        const clickEvent = new MouseEvent('click', {
                                            view: window,
                                            bubbles: true,
                                            cancelable: true,
                                            button: 0
                                        });
                                        element.dispatchEvent(clickEvent);

                                        // 10. Fallback: native method
                                        setTimeout(() => {
                                            element.click();
                                            console.log('[Stealth] ✅ Ultra-realistic click executed SUCCESSFULLY!');

                                            if (callback) callback();
                                        }, 150);

                                    }, 80);
                                }, getRandomDelay(150)); // Variable pressure time
                            }, 120);
                        }, 100);
                    }, 200);
                }
            }, 25); // 25ms between each step = smooth

        }, 1000);
    }

    // ═══════════════════════════════════════════════════════════
    // MAIN SYSTEM
    // ═══════════════════════════════════════════════════════════

    let attemptCount = 0;
    let buttonFound = false;
    let purchaseExecuted = false;

    // Detects which upsell this page is
    const isUpsell2 = document.querySelector('div[data-mndpay-render="019cb4f9-51f9-72da-aca9-58ae2b5062d5"]');
    const isUpsell3 = document.querySelector('div[data-mndpay-render="019cb4fd-3c1c-7307-af40-cc41cdf19712"]');

    if (!isUpsell2 && !isUpsell3) {
        console.log('[Stealth] This page is not an auto-purchasable upsell. Script disabled.');
        return;
    }

    const currentUpsell = isUpsell2 ? 2 : 3;
    const baseDelay = currentUpsell === 2 ? CONFIG.baseDelayUpsell2 : CONFIG.baseDelayUpsell3;
    const finalDelay = getRandomDelay(baseDelay);

    console.log('═══════════════════════════════════════════════════════════');
    console.log('[Stealth] 🥷 ANTI-DETECTION SYSTEM ACTIVATED');
    console.log('[Stealth] Page:', 'UPSELL', currentUpsell);
    console.log('[Stealth] Configured delay:', Math.floor(finalDelay / 1000), 'seconds');
    console.log('[Stealth] Active simulations:');
    console.log('  - Mouse movement:', CONFIG.mouseMovements.enabled ? 'YES' : 'NO');
    console.log('  - Natural scroll:', CONFIG.scrollBehavior.enabled ? 'YES' : 'NO');
    console.log('  - Video tracking:', CONFIG.videoTracking.enabled ? 'YES' : 'NO');
    console.log('═══════════════════════════════════════════════════════════');

    // ═══════════════════════════════════════════════════════════
    // PHASE 1: WAIT MAIN DELAY
    // ═══════════════════════════════════════════════════════════

    setTimeout(() => {
        console.log('[Stealth] ⏰ Main delay completed. Starting purchase sequence...');

        // ═══════════════════════════════════════════════════════════
        // PHASE 2: SIMULATE HUMAN BEHAVIOR
        // ═══════════════════════════════════════════════════════════

        simulateMouseMovement(null, () => {
            simulateScrolling(() => {

                // ═══════════════════════════════════════════════════════════
                // PHASE 3: FIND AND CLICK BUTTON
                // ═══════════════════════════════════════════════════════════

                console.log('[Stealth] Looking for accept button...');

                const findButton = setInterval(() => {
                    attemptCount++;

                    if (buttonFound || purchaseExecuted) {
                        clearInterval(findButton);
                        return;
                    }

                    // Search for iframe
                    const iframe = document.querySelector('iframe[data-mndpay-iframe]');
                    if (!iframe) {
                        if (attemptCount % 10 === 0) {
                            console.log('[Stealth] Waiting for iframe... attempt', attemptCount);
                        }
                        if (attemptCount >= CONFIG.maxAttempts) {
                            console.error('[Stealth] ❌ Timeout: iframe not found');
                            clearInterval(findButton);
                        }
                        return;
                    }

                    // Access iframe content
                    let iframeDoc;
                    try {
                        iframeDoc = iframe.contentDocument || iframe.contentWindow.document;
                    } catch (e) {
                        return;
                    }

                    if (!iframeDoc || !iframeDoc.body) return;

                    // Search for button
                    const selectors = [
                        '.btn-accept',
                        'button[data-action="accept"]',
                        '.upsell-btn.btn-accept',
                        'button.accept',
                        'a.btn-accept'
                    ];

                    let button = null;
                    for (const sel of selectors) {
                        button = iframeDoc.querySelector(sel);
                        if (button) break;
                    }

                    // Search by text if not found
                    if (!button) {
                        const buttons = iframeDoc.querySelectorAll('button, a');
                        for (const btn of buttons) {
                            const text = btn.textContent.toLowerCase();
                            if (text.includes('accept') || text.includes('accelerate') || text.includes('accélérer') ||
                                text.includes('eliminate') || text.includes('éliminez') || text.includes('yes') || text.includes('oui')) {
                                button = btn;
                                break;
                            }
                        }
                    }

                    if (button) {
                        buttonFound = true;
                        clearInterval(findButton);

                        console.log('[Stealth] ✅ Button found!');
                        console.log('[Stealth] Text:', button.textContent.trim());

                        // Check video (if enabled)
                        if (CONFIG.videoTracking.enabled && !checkVideoProgress()) {
                            console.log('[Stealth] ⏳ Waiting minimum video time...');
                            const videoCheck = setInterval(() => {
                                if (checkVideoProgress()) {
                                    clearInterval(videoCheck);
                                    executeStealthClick(button, () => {
                                        purchaseExecuted = true;
                                    });
                                }
                            }, CONFIG.videoTracking.checkInterval);
                        } else {
                            // Execute click immediately
                            executeStealthClick(button, () => {
                                purchaseExecuted = true;
                            });
                        }
                    } else if (attemptCount >= CONFIG.maxAttempts) {
                        console.error('[Stealth] ❌ Timeout: button not found');
                        clearInterval(findButton);
                    }

                }, CONFIG.checkInterval);
            });
        });

    }, finalDelay);

    // Redirect monitor (success)
    window.addEventListener('beforeunload', () => {
        if (purchaseExecuted) {
            console.log('[Stealth] ✅ PURCHASE PROCESSED - Redirecting...');
        }
    });

})();
