let $ = Symbol('$');//定义一个终止符
class Trie {

    constructor() {
        this.root = Object.create(null)//创建一个空对象
    }

    /**
     * 插入字符串
     * @param {string} word 
     */
    insert(word) {
        let node = this.root;
        //遍历字符串
        for(let c of word){
            if(!node[c])
                node[c] = Object.create(null);
            node = node[c]
        }
        if(!($ in node)){
            node[$] = 0;
        }
        node[$] ++;
    }

    most(){
        let max = 0
        let maxWord = null;
        let visit = (node,word)=>{
            if(node[$] && node[$]>max){
                max = node[$];
                maxWord = word
            }
            //断枝
            if(node[$])
                return;
            //递归
            for(let p in node){
                visit(node[p],word + p)
            }
        }
        visit(this.root,"")
        return {
            max : max,
            maxWord : maxWord
        }
    }
}