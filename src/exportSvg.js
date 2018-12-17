
/**
 * [exportSvg 将svg保存为png图片]
 * 思路：（svg => canvas => png）
把svg作为dataurl放在image
创建一个canvas来显示image
利用canvas.toDataURL存为图片
创建a标签出发浏览器下载
 * @param  {[type]} node [description]
 * @param  {[type]} name [description]
 * @return {[type]}      [description]
 */
export default function exportSvg(node, name) {
  // node 是 svg dom,document.getElementById()
  const serializer = new XMLSerializer();
  const source = `<?xml version="1.0" standalone="no"?>\r\n${serializer.serializeToString(node)}`;
  const image = new Image();
  image.src = `data:image/svg+xml;charset=utf-8,${encodeURIComponent(source)}`;
  const canvas = document.createElement('canvas');
  canvas.width = node.clientWidth;
  canvas.height = node.clientHeight;
  const context = canvas.getContext('2d');
  // context.fillStyle = '#fff'; // #fff设置保存后的PNG 是白色的
  // context.fillRect(0, 0, 10000, 10000);
  image.onload = function () {
    context.drawImage(image, 0, 0);
    const a = document.createElement('a');
    a.download = `${name}.png`;
    a.href = canvas.toDataURL('image/png');
    a.click();
  };
}
