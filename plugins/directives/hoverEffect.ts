// /plugins/directives/hoverEffect.ts
import { useMouse } from '@vueuse/core';
import { Directive } from 'vue';
import { defineNuxtPlugin } from '#app';

// Define the directive with proper typing
const hoverFxDirective: Directive<HTMLElement> = {
    mounted(el) {
        const fxElement = document.createElement('div');
        fxElement.className = 'fx absolute rounded-full bg-white shadow-lg h-24 w-24 flex items-center justify-center pointer-events-none';

        const innerText = el.cloneNode(true) as HTMLElement;
        innerText.style.transform = '';
        innerText.classList.add('text-8xl', 'font-bold', 'text-transparent', 'bg-gradient-to-r', 'from-green-400', 'to-blue-500', 'bg-clip-text');

        fxElement.appendChild(innerText);
        document.body.appendChild(fxElement);

        const { x: mouseX, y: mouseY } = useMouse();

        const updateFxPosition = () => {
            fxElement.style.top = `${mouseY.value}px`;
            fxElement.style.left = `${mouseX.value}px`;
            innerText.style.transform = `translate(${(-mouseX.value + 100) * -0.05}px, ${(-mouseY.value + 100) * -0.05}px)`;
        };

        el.addEventListener('mouseenter', () => {
            fxElement.style.display = 'flex'; // Show the fxElement when hovering
            el.addEventListener('mousemove', updateFxPosition);
        });

        el.addEventListener('mouseleave', () => {
            fxElement.style.display = 'none'; // Hide when not hovering
            el.removeEventListener('mousemove', updateFxPosition);
        });
    },

    unmounted(el) {
        el.removeEventListener('mousemove', updateFxPosition);
    }
};

export default defineNuxtPlugin((nuxtApp) => {
    // Register the directive globally in the Nuxt app
    nuxtApp.vueApp.directive('hover-fx', hoverFxDirective);
});