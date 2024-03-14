const socketHandler = function(socket: any) {
  const game = useGameStore()
  socket.on("game-state", (msg: any, cb: any) => {
    console.log("recieved game-state:", msg);
    game.update(msg);
  });

  socket.on("game-stage", (msg: any, cb: any) => {
    console.log("recieved game-stage:", msg);
    game.updateStage(msg);
  });

  socket.on("demonstration", (msg: any, cb: any) => {
    console.log("recieved demonstration:", msg);
    game.updateDemonstration(msg);
  });
};

export default socketHandler;
