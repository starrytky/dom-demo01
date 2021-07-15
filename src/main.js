// 例子1：创建一个dom并插入到例子一中
let node1 = dom.find(".item1")[0];
let newNode = dom.create("<div>create new div<div>")
dom.after(node1, newNode);

// 例子2：创建两个节点，并把按顺序
let node2 = dom.find(".item2")[0];
let newNode2 = dom.create("<div>node1</div>");
let newNode3 = dom.create("<div>node2</div>")
node2.appendChild(newNode2)
dom.after(newNode2, newNode3)

// 例子3：创建两个节点，并将新结点放前
let node3 = dom.find(".item .content")[2];
let newNode_1 = dom.create("<div>node1</div>");
let newNode_2 = dom.create("<div>node2</div>")
node3.appendChild(newNode_1);
dom.before(newNode_1, newNode_2)

// 例子4：父子节点
let node4 = dom.find(".item .content")[3];
let newNode_3 = dom.create("<div>node1</div>");
let newNode_4 = dom.create("<div>node2</div>")
node4.appendChild(newNode_3);
newNode_3.append(newNode_4)

// 例子5：给oldNode 添加父节点
let node5 = dom.find(".item .content")[4];
let newNode4 = dom.create("<div>node1</div>");
let newNode5 = dom.create("<div>node2</div>")
node5.appendChild(newNode4);
dom.wrap(newNode4, newNode5)


// 例子6：删除一个node
let node6 = dom.find(".item .content")[5];
let newNode6 = dom.create("<div>node1</div>");
node6.appendChild(newNode6)
newNode6.parentNode.removeChild(newNode6)

// 例子7：删除一个node
let node7 = dom.find(".item .content")[6];
let newNode7 = dom.create("<div>node2</div>");
node7.appendChild(newNode7);
node7.appendChild(newNode6)
dom.empty(node7);


// 例子8：find 红色
const div = dom.find('#test>.red')[0] // 获取对应的元素
dom.style(div, 'color', 'red') // 设置 div.style.color

const divList = dom.find('.red') // 获取多个 div.red 元素
dom.each(divList, (n)=> console.log(n)) // 遍历 divList 里的所有元素
