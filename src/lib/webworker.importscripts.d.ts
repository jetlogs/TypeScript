
/////////////////////////////
/// WorkerGlobalScope APIs
/////////////////////////////
// These are only available in a Web Worker
declare function importScripts(...urls: string[]): void;
declare var registerProcessor: (name: string, processor: typeof AudioWorkletProcessor): void;
