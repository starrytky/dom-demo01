window.dom = {
  /**
   * 创建节点
   * @param {String} str 创建的节点，eg: <div>1<div> 
   * @returns 
   */
  create(str){
    const container = document.createElement("template");
    container.innerHTML = str.trim();
    return container.content.firstChild;
  },
  /**
   * 在OldNode之后插入newNode
   * @param {node} oldNode 
   * @param {node} newNode 
   */
  after(oldNode, newNode){
    oldNode.parentNode.insertBefore(newNode, oldNode.nextSibling);
  },
  /**
   * 在oldNode之前插入newNode
   * @param {node} oldNode 
   * @param {node} newNode 
   */
  before(oldNode, newNode){
    oldNode.parentNode.insertBefore(newNode, oldNode);
  },
  /**
   * 子节点child插入父节点parent
   * @param {node} parent 父节点
   * @param {node} child 子节点
   */
  append(parent, child){
    parent.appendChild(child)
  },
  /**
   * 给oldNode 添加父节点
   * @param {node} oldNode 原节点
   * @param {node} newParent 新的父节点
   */
  wrap(oldNode, newParent){
    dom.before(oldNode, newParent);
    dom.append(newParent, oldNode);
  },
  /**
   * 删除一个node
   * @param {node} node 需要删除的node
   * @returns 返回删除的node
   */
  remove(node){
    node.parentNode.removeChild(node);
    return node;
  },
  /**
   * 清空子节点
   * @param {node} node 删除子节点
   * @returns 返回所有子节点，一层的
   */
  empty(node){
    const array = [];
    let x = node.firstChild;
    while(x){
      array.push(dom.remove(node.firstChild));
      x = node.firstChild;
    }
    return array
  },
  /**
   * 
   * @param {node} node 添加\获取属性的节点
   * @param {string} name 属性名
   * @param {string} value 属性值 
   * @returns 
   */
  attr(node, name, value){
    if(arguments.length === 3){
      node.setAttribute(name, value);
    }else if(arguments.length === 2) {
      return node.getAttribute(name);
    }
  },
  /**
   * 插入或查询节点的文本内容
   * @param {node} node 节点
   * @param {string} string 插入的内容
   * @returns 当只有一个入参返回节点的文本内容
   */
  text(node, string){
    if(arguments.length === 2){
      if('innerText' in node){
        node.innerText = string;
      }else {
        node.textContent = string;
      }
    }else if(arguments.length === 1){
      if('innerText' in node){
        return node.innerText;
      }else {
        return node.textContent;
      }
    }
  },
  /**
   * 向节点插入html
   * @param {node} node 节点
   * @param {string} string 插入的html内容 
   * @returns 当只有一个入参，返回节点的html
   */
  html(node, string){
    if(arguments.length === 2){
      node.innerHTML = string;
    }else if(arguments.length === 1){
      return node.innerHTML;
    }
  },
  /**
   * 查看或设置节点样式
   * @param {node} node 节点
   * @param {string|Object} name 样式名或样式对象
   * @param {string} value 样式值
   * @returns 当入参是两个且第二个参数是string类型，返回该样式名的属性值
   */
  style(node, name, value){
    if(arguments.length === 3){
      node.style[name] = value;
    }else if(arguments.length === 2){
      if(typeof name === 'string') {
        return node.style[name];
      }else if(node instanceof Object){
        const object = name;
        for(let key in objcet){
          node.style[key] = object[key]
        }
      }
    }
  },
  class: {
    /**增加class */
    add(node, className){
      node.classList.add(className);
    },
    /**移除class */
    remove(node, className){
      node.classList.remove(className);
    },
    /**查看是否有class */
    has(node, className){
      return node.classList.contains(className);
    }
  },
  on(node, eventName, fn){
    node.addEventListener(eventName, fn);
  },
  off(node, eventName, fn){
    node.removeEventListener(eventName, fn);
  },
  find(selector, scope){
    return (scope || document).querySelectorAll(selector);
  },
  parent(node){
    return node.parentNode;
  },
  children(node){
    return node.children;
  },
  siblings(node){
    return Array.from(node.parentNode.children).filter(n => n!==node)
  },
  next(node){
    let x = node.nextSibling;
    while(x && x.nodeType === 3){
      x = x.nextSibling;
    }
    return x;
  },
  previous(node){
    let x = node.previousSibling;
    while(x && x.nodeType === 3){
      x = x.previousSibling;
    } 
    return x;
  },
  each(nodeList, fn){
    for(let i=0;i<nodeList.length;i++){
      fn.call(null, nodeList[i]);
    }
  },
  index(node){
    const list = dom.children(node.parentNode);
    let i;
    for(i=0;i<list.length;i++){
      if(list[i] === node){
        break;
      }
    }
    return i;
  }
}
