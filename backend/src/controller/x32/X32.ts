import OSCx32Service from "../../services/OSCx32Service";

class X32 {
    public static loadScene(scene: number) {
        OSCx32Service.getInstance().sendOSC("/load", "scene", scene);
    }
}

export default X32;
