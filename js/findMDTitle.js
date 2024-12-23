const fs = require('fs');
const path = require('path');

function findSecondLevelHeadings(markdownContent) {
    // 使用正则表达式匹配所有以 '## ' 开头的行
    const regex = /^##\s+(.*)$/gm;
    let matches;
    const headings = [];

    // 使用正则表达式的exec方法，找到所有匹配的行
    while ((matches = regex.exec(markdownContent)) !== null) {
        // 第一个捕获组是标题内容
        headings.push(matches[1]);
    }

    return headings;
}

// 读取Markdown文件
const filePath = path.join(__dirname, '../_posts/Tree.md');
fs.readFile(filePath, 'utf8', (err, data) => {
    if (err) {
        console.error('Error reading file:', err);
        return;
    }

    // 调用函数
    const secondLevelHeadings = findSecondLevelHeadings(data);
    console.log('Second Level Headings:', secondLevelHeadings);

    let index = Math.ceil(secondLevelHeadings.length * Math.random() - 1)
    let result = secondLevelHeadings[index]

    console.log("Q:COUNT: ", secondLevelHeadings.length)
    console.log("Q:INDEX: ", index)
    console.log("Q:RESULT: ", result)
});
