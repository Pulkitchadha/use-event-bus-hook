type ICustomEventCallback = (data?: Event) => void;
type IEvent = string;

export const EventBus = {
    on(event: IEvent, callback: (value: any) => void) {
        document.addEventListener(event, callback);
    },
    once(event: IEvent, callback: ICustomEventCallback) {
        document.addEventListener(event, callback, { once: true });
    },
    emit(event: IEvent, data = null) {
        document.dispatchEvent(new CustomEvent(event, { detail: data }));
    },
    off(event: IEvent, callback: ICustomEventCallback) {
        document.removeEventListener(event, callback);
    },
};
