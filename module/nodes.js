const createGraph = require('ngraph.graph');

const g = createGraph();

const node1 = g.addNode('Introduce-OOP', {
    name: "Khái niệm cơ bản về OOP",
    id: 1,
    source: ".pdf/[1].pdf",
    tags: [
        "OOP",
        "Khái niệm OOP",
        "Hướng đối tượng OOP",
        "Lập trình OOP",
    ]
})

const node2 = g.addNode('Properties-OOP', {
    name: "Tính chất của OOP ",
    id: 2,
    source: ".pdf/[2].pdf",
    tags: [
        "Tính trừu tượng",
        "Tính tái sử dụng",
        "Tính mở rộng",
        "Tính linh hoạt",
        "Tính bảo mật",
        "Tính kế thừa",
        "Tính đa hình",
        "Tính đóng gói",
    ]
})

const node3 = g.addNode('Compare-OOP-procedural-programming', {
    name: "So sánh với lập trình hướng thủ tục",
    id: 3,
    source: ".pdf/[3].pdf",
    tags: [
        "OOP",
        "Hướng đối tượng",
        "Lập trình hướng thủ tục",
        "Hàm",
        "Phương pháp lập trình",
        "So sánh",
        "Khác nhau",
        "Giống nhau",
    ]
})

const node4 = g.addNode('Class-and-Object', {
    name: "Khái niệm về Class và Object",
    id: 4,
    source: ".pdf/[4].pdf",
    tags: [
        "OOP",
        "Hướng đối tượng",
        "Class",
        "Object"
    ]
})

const node5 = g.addNode('Class-components', {
    name: "Các thành phần của Class",
    id: 5,
    source: ".pdf/[5].pdf",
    tags: [
        "Các thành phần của class",
        "Các thành phần của lớp",
        "class",
        "object",
        "đối tượng",
        "lớp",
        "thuộc tính",
        "phương thức",
        "biến đối tượng",
        "phạm vi truy cập",
    ]
})

const node6 = g.addNode('Initialization-method', {
    name: "Phương thức khởi tạo ",
    id: 6,
    source: ".pdf/[6].pdf",
    tags: [
        "Constructor",
        "Khởi tạo",
        "Hàm khởi tạo",
        "Phương thức khởi tạo",
        "Object initialization",
        "Initializing objects",
    ]
})

const node7 = g.addNode('Example-Class-Object', {
    name: "Ví dụ minh họa Class-Object",
    id: 7,
    source: ".pdf/[7].pdf",
    tags: [
        "Ví dụ",
        "Lập trình hướng đối tượng",
        "OOP",
        "Class",
        "Object",
        "Lớp",
        "Đối tượng",
    ]
})

const node8 = g.addNode('Inheritance-concept', {
    name: "Khái niệm về Kế thừa ",
    id: 8,
    source: ".pdf/[8].pdf",
    tags: [
        "Kế thừa",
        "OOP",
        "Hướng đối tượng",
        "Lớp con",
        "Lớp cha",
        "Đa kế thừa",
        "Trừu tượng hóa",
        "Đóng gói",
        "Ghi đè",
        "Ghi đè phương thức",
        "Ghi đè thuộc tính",
        "Quan hệ kế thừa",
        "Ví dụ kế thừa",
        "Thừa kế",
        "Sử dụng lại code",
    ]
})

const node9 = g.addNode('Example-Inheritance', {
    name: "Ví dụ minh họa về kế thừa",
    id: 9,
    source: ".pdf/[9].pdf",
    tags: [
        "Kế thừa",
        "Thừa kế",
        "Ví dụ",
        "Override",
        "Ví dụ về lớp cha",
        "Ví dụ về lớp con",
        "Ví dụ về kế thừa",
        "VD về kế thừa",
    ]
})

const node10 = g.addNode('Polymorphism-concept', {
    name: "Khái niệm về Đa hình",
    id: 10,
    source: ".pdf/[10].pdf",
    tags: [
        "Đa hình",
        "Polymorphism",
        "Tính đa hình",
        "Đa hình trong OOP",
        "Đa hình trong lập trình hướng đối tượng",
        "Đa hình tĩnh",
        "Đa hình động",
        "Hình thức đa hình",
        "Nội dung đa hình",
        "Khái niệm đa hình"
    ]
})

const node11 = g.addNode('Example-Polymorphism', {
    name: "Ví dụ minh họa về đa hình",
    id: 11,
    source: ".pdf/[11].pdf",
    tags: [
        "Đa hình",
        "Hướng đối tượng",
        "Polymorphism",
        "Kế thừa",
        "Overloading",
        "Override",
        "Dynamic binding",
        "Abstract class",
        "Interface",
        "Ví dụ",
    ]
})

const node12 = g.addNode('Definition-of-OOP', {
    name: "Định nghĩa OOP",
    id: 12,
    source: ".pdf/[12].pdf",
    tags: [
        "OOP",
        "Lập trình hướng đối tượng",
        "Hướng đối tượng",
        "Định nghĩa",
        "Lập trình",
        "Class",
        "Object",
        "Thuộc tính",
        "Phương thức",
        "Tính đóng gói",
        "Tính kế thừa",
        "Tính đa hình",
        "Tính trừu tượng",
    ]
})

const node13 = g.addNode('Encapsulation', {
    name: "Tính đóng gói",
    id: 13,
    source: ".pdf/[13].pdf",
    tags: [
        "Tính đóng gói",
        "Encapsulation",
        "Access modifiers",
        "Private",
        "Protected",
        "Public",
        "Encapsulated data",
        "Encapsulated behavior",
        "Information hiding",
        "Data hiding",
        "Abstraction",
    ]
})

const node14 = g.addNode('Inheritance', {
    name: "Tính kế thừa",
    id: 14,
    source: ".pdf/[14].pdf",
    tags: [
        "Tính kế thừa",
        "Kế thừa trong OOP",
        "Đa kế thừa",
        "Đơn kế thừa",
        "Lớp cha",
        "Lớp con",
        "Phương thức cha",
        "Phương thức con",
        "Sử dụng kế thừa",
        "Ví dụ kế thừa",
        "OOP kế thừa",
    ]
})

const node15 = g.addNode('Polymorphism', {
    name: "Tính đa hình",
    id: 15,
    source: ".pdf/[15].pdf",
    tags: [
        "đa hình",
        "tính đa hình",
        "đa hình động",
        "đa hình tĩnh",
        "ví dụ về đa hình",
        "tính đa hình trong",
        "polymorphism",
    ]
})

const node16 = g.addNode('Abstraction', {
    name: "Tính trừu tượng",
    id: 16,
    source: ".pdf/[16].pdf",
    tags: [
        "Tính trừu tượng",
        "Tính trừu tượng trong OOP",
        "Tính trừu tượng trong lập trình",
        "Tính trừu tượng và đóng gói",
        "Tính trừu tượng và kế thừa",
        "Ví dụ về tính trừu tượng",
    ]
})

const node17 = g.addNode('Reuse', {
    name: "Tính tái sử dụng",
    id: 17,
    source: ".pdf/[17].pdf",
    tags: [
        "Tái sử dụng mã nguồn",
        "Tái sử dụng code",
        "Tái sử dụng phương thức",
        "Tái sử dụng lớp",
        "Tái sử dụng đối tượng",
        "Tái sử dụng module",
        "Tái sử dụng thư viện",
        "Tái sử dụng framework",
        "Tái sử dụng phần mềm",
    ]
})

const node18 = g.addNode('Extension', {
    name: "Tính mở rộng",
    id: 18,
    source: ".pdf/[18].pdf",
    tags: [
        "Tính mở rộng",
        "Sự mở rộng trong lập trình hướng đối tượng",
        "Tính mở rộng trong OOP",
        "Đa hình và tính mở rộng",
        "Kế thừa và tính mở rộng",
        "Tính mở rộng trong quá trình phát triển phần mềm",
    ]
})

const node19 = g.addNode('Flexibility', {
    name: "Tính linh hoạt",
    id: 19,
    source: ".pdf/[19].pdf",
    tags: [
        "tính linh hoạt",
        "độ linh hoạt",
        "khả năng sửa đổi",
        "khả năng thích ứng",
        "thiết kế linh hoạt",
        "linh hoạt trong lập trình hướng đối tượng",
        "linh hoạt trong OOP",
    ]
})

const node20 = g.addNode('Security', {
    name: "Tính bảo mật",
    id: 20,
    source: ".pdf/[20].pdf",
    tags: [
        "Tính an toàn trong lập trình hướng đối tượng",
        "Các nguyên tắc an toàn trong OOP",
        "Kiểm tra lỗi trong lập trình hướng đối tượng",
        "Xử lý ngoại lệ trong OOP",
        "Phạm vi biến và tính bảo mật trong OOP",
    ]
})

const node21 = g.addNode('Inheritance-exercise', {
    name: "Bài tập về kế thừa",
    id: 21,
    source: ".pdf/[21].pdf",
    tags: [
        "bài tập lập trình hướng đối tượng kế thừa",
        "ví dụ về kế thừa trong lập trình",
        "đề thi về kế thừa trong lập trình",
        "bài tập kế thừa trong Java/C++/Python",
        "kế thừa đơn, đa cấp, đa hình, đa năng",
        "bài tập OOP kế thừa",
        "tập luyện kế thừa trong lập trình",
    ]
})

const node22 = g.addNode('Polymorphism-exercise', {
    name: "Bài tập về đa hình",
    id: 22,
    source: ".pdf/[22].pdf",
    tags: [
        "đa hình",
        "bài tập lập trình đa hình",
        "kế thừa và đa hình",
        "bài tập ứng dụng đa hình",
    ]
})

const node23 = g.addNode('Encapsulation-exercise', {
    name: "Bài tập về tính đóng gói",
    id: 23,
    source: ".pdf/[23].pdf",
    tags: [
        "bài tập tính đóng gói trong lập trình hướng đối tượng",
        "đề bài về tính đóng gói",
        "bài tập bảo mật tính đóng gói",
        "ví dụ về tính đóng gói trong Java",
        "đặc điểm tính đóng gói trong C++",
        "lập trình tính đóng gói trong Python",
    ]
})

g.addLink(node1.id, node2.id);
g.addLink(node1.id, node3.id);
g.addLink(node1.id, node4.id);
g.addLink(node1.id, node8.id);
g.addLink(node1.id, node10.id);
g.addLink(node1.id, node12.id);

g.addLink(node2.id, node3.id);
g.addLink(node2.id, node13.id);
g.addLink(node2.id, node14.id);
g.addLink(node2.id, node15.id);
g.addLink(node2.id, node16.id);
g.addLink(node2.id, node17.id);
g.addLink(node2.id, node18.id);
g.addLink(node2.id, node19.id);
g.addLink(node2.id, node20.id);

g.addLink(node4.id, node5.id);
g.addLink(node4.id, node6.id);
g.addLink(node4.id, node7.id);
g.addLink(node4.id, node8.id);
g.addLink(node4.id, node10.id);
g.addLink(node4.id, node12.id);

g.addLink(node5.id, node6.id);
g.addLink(node5.id, node7.id);

g.addLink(node6.id, node7.id);

g.addLink(node7.id, node9.id);
g.addLink(node7.id, node11.id);

g.addLink(node8.id, node9.id);
g.addLink(node8.id, node10.id);
g.addLink(node8.id, node21.id);

g.addLink(node9.id, node10.id);
g.addLink(node9.id, node21.id);

g.addLink(node10.id, node11.id);
g.addLink(node10.id, node22.id);

g.addLink(node11.id, node22.id);

g.addLink(node12.id, node13.id);
g.addLink(node12.id, node14.id);
g.addLink(node12.id, node15.id);
g.addLink(node12.id, node16.id);
g.addLink(node12.id, node17.id);
g.addLink(node12.id, node18.id);
g.addLink(node12.id, node19.id);
g.addLink(node12.id, node20.id);

g.addLink(node13.id, node14.id);
g.addLink(node13.id, node15.id);

g.addLink(node14.id, node15.id);

g.addLink(node16.id, node17.id);
g.addLink(node16.id, node18.id);
g.addLink(node16.id, node19.id);
g.addLink(node16.id, node20.id);

g.addLink(node17.id, node18.id);
g.addLink(node17.id, node19.id);
g.addLink(node17.id, node20.id);

g.addLink(node18.id, node19.id);
g.addLink(node18.id, node20.id);

g.addLink(node19.id, node20.id);

g.addLink(node20.id, node21.id);
g.addLink(node20.id, node22.id);
g.addLink(node20.id, node23.id);

g.addLink(node21.id, node22.id);
g.addLink(node21.id, node23.id);

g.addLink(node22.id, node23.id);

function show_node() {
    console.log(g.getNodesCount() + ' nodes, ' + g.getLinksCount() + ' links');
    g.forEachNode((node) => {
        console.log(node.id + ' - ' + node.data.type);
        console.log('Links: ');
        g.forEachLinkedNode(node.id, (linkedNode) => {
            console.log('- ' + linkedNode.id);
        });
    });
}

const related_knowledge = function (i) {
    const res = [];
    g.forEachNode((node) => {
        if (node.data.id === i) {
            g.forEachLinkedNode(node.id, (linkedNode) => {
                res.push({ name: linkedNode.data.name, id: linkedNode.data.id });
            });
        }
    });
    return res;
};

module.exports.related_knowledge = related_knowledge;
module.exports.g = g;