import Modal from "./Modal";
import Drawer from "./Drawer";
import Toast from "./Toast";
import Loading from "./Loading";

export default function Overlay() {
  return (
    <>
      <Modal />
      <Drawer />
      <Toast />
      <Loading />
    </>
  );
}
