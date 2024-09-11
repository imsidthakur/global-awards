import EventEmitter from "eventemitter3";

export const newEvent = new EventEmitter();

export const showToast = (data) => {
  newEvent.emit("showToast", data);
};

export const emitLogout = () => {
  newEvent.emit("logout");
};
