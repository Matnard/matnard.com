export default function guify(obj, conf, updateFn){
    obj.hasGui = true;
    obj.gui = conf;
    obj.updateWithGuiValues = updateFn;
    return obj;
}