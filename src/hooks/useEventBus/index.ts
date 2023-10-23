import { useEffect, useRef } from "react";

import { EventBus } from "../../helpers/eventBus";
type IEvent = string;

/**
 * Custom hook to use EventBus in react components.It automatically removes the listener on unmount.
 */
export function useEventBus(eventName: IEvent, handler: (event?: Event) => void) {
    // Create a ref that stores handler
    const savedHandler = useRef(handler);

    useEffect(() => {
        savedHandler.current = handler;
    }, [handler]);

    useEffect(() => {
        // Create event listener that calls handler function stored in ref
        const eventListener: typeof handler = event => savedHandler.current(event);

        EventBus.on(eventName, eventListener);

        // Remove event listener on cleanup
        return () => {
            EventBus.off(eventName, eventListener);
        };
    }, [eventName]);
}
