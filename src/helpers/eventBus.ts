type ICustomEventCallback = (value) => void;
type IEvent = string;

class EventBus {
    on(event: IEvent, callback: ICustomEventCallback) {
        document.addEventListener(event, callback);
    }

    once(event: IEvent, callback: ICustomEventCallback) {
        document.addEventListener(event, callback, { once: true });
    }

    emit(event: IEvent, data) {
        document.dispatchEvent(new CustomEvent(event, { detail: data }));
    }

    off(event: IEvent, callback: ICustomEventCallback) {
        document.removeEventListener(event, callback);
    }
}

export default new EventBus();