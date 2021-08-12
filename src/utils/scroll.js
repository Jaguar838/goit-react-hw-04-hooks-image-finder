/**
 * Scrolling window to end
 */
export const scroll = () => {
    window.scrollTo({
        top: document.documentElement.scrollHeight,
        behavior: 'smooth',
    });
};
