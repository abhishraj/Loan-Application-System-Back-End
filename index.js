import { cpus } from "os";
import cluster from "cluster";
import { initServer } from "./app.js";
const clusterWorkerSize = cpus().length;
console.log("Number Of CPU : ", clusterWorkerSize);
if (clusterWorkerSize > 1) {
    if (cluster.isMaster) {
        // iterate on number of available cores need to be utilized by an application
        for (let i = 0; i < clusterWorkerSize; i++) {
            cluster.fork();
        }

        // if any of the worker process dies then start a new one by simply forking another one
        cluster.on("exit", (worker, code, signal) => {
            console.log(worker.id, " => Worker ", worker.process.pid, " died with code: ", code, "and signal: ", signal);
            fork();
        });
    } else {
        initServer();
    }
} else {
    initServer();
}