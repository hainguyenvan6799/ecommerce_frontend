import { useEffect } from "react";

// services
import { socket } from "services/socket";

// configs
import { SOCKET_EVENTS } from "configs";

const useChat2 = () => {
  const { user } = useSelector((state) => state.auth);

  useEffect(() => {
    if (user) {
      socket.emit(SOCKET_EVENTS.IDENTIFY, user._id);
    }

    return () => {
      socket.off();
    };
  }, [user]);

  useEffect(() => {
    if (user) {
      socket.on(SOCKET_EVENTS.CHAT, function (args) {
        console.log(args);
      });
    }
  });
};

export default useChat2;
