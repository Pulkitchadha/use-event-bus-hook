# useEventBusHook
> This React hook enables the use of the event bus pattern in React with zero external dependencies and ensures automatic event listener removal during cleanup, preventing memory leaks.

## How to use it:

1. First, install the package.
   
```sh
  npm install use-event-bus-hook
            OR
  yarn add use-event-bus-hook
```

2. Add the following code into the component from which you intend to emit the event.

```sh
    import { EventBus } from "use-event-bus-hook";

    const onClick = () => {
        EventBus.emit("EVENT_NAME", 5);
    }
```
3. Add the following code into the component where you intend to listen for the event.

```sh
    import { useEventBus } from "use-event-bus-hook";

    const handler = (e) => console.log(e.details); // 5
    useEventBus("EVENT_NAME", handler);
```

##### Note: Ensures that the event name should be same in both the components.

### Options:

1. eventBus

| Property           | Description                        | Type                   
| :------------------ |:----------------------------------:| :---------------------
| on     | Listen to event  | function(event: string, callback)  |  |
| once   | Listen to event only once | function(event: string, callback) |
| emit   | Send the data  | function(event: string, data)               |
| off    | Remove the listener  | function(event: string, callback)     |

2. useEventBus

| Property           | Description                        | Type                  
| :------------------ |:----------------------------------:| :---------------------:|
| eventName          | Event Name          | string  |  |
| handler            | Trigger when event is captured  | function(event) |


## License

MIT © [pulkitchdha]()