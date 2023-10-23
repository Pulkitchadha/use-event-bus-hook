import { renderHook } from '@testing-library/react-hooks';
import { useEventBus } from '.';

describe("useFetchEmployee hook", () => {
    it("Should be defined", () => {
        expect(useEventBus).toBeDefined();
    });

    it("Should match the snapshot", () => {
        const handler = jest.fn();
        const { result } = renderHook(() => useEventBus("Event_Name", handler));
        expect(result).toMatchSnapshot();
    });
});