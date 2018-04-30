
/////////////////////////////
/// WorkerGlobalScope APIs
/////////////////////////////
// These are only available in a Web Worker
declare function importScripts(...urls: string[]): void;
declare function registerProcessor(name: string, processor: AudioWorkletProcessor): void;
