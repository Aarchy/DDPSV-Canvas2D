declare module 'd3-flextree';

declare module "worker-loader!*" {
    class WebpackWorker extends Worker {
      constructor();
    }

    export default WebpackWorker;
};
