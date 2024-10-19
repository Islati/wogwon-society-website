// /types/directives.d.ts
import { Directive } from 'vue';

declare module 'vue' {
    interface Directives {
        'hover-fx': Directive<HTMLElement>;
    }
}