# 2回目の内容説明

1. VScodeの導入
    1. VScode インストール
    2. Settings.json の設定
    3. 拡張機能の設定
2. HTMLの導入
3. DOMtreeの説明
4. テキトーなwebサイトでDOM操作しよう
5. 実際になんか作る

## 1. VScode
### 1-1. VScodeインストール 
[公式からダウンロード]("https://code.visualstudio.com/download")

### 1-2. settings.jsonの設定

```settings.json
{  
    "editor.tabSize": 2,
    "editor.formatOnSave": true,
    "[html]": {
        "editor.defaultFormatter": "esbenp.prettier-vscode"
    },
    "[css]": {
        "editor.defaultFormatter": "esbenp.prettier-vscode"
    },
    "[javascript]": {
        "editor.defaultFormatter": "esbenp.prettier-vscode"
    },
}

```

### 1-3. Extensionの設定
最低限の機能
- prettier
- indent-rainbow
- auto close tag

