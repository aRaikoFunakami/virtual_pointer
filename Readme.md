了解しました。ユーザーの操作をログに記録する機能を削除した内容で、README.mdを更新します。

---

# Virtual Pointer Navigation Chrome Extension

A Chrome extension that enables navigation through links using a virtual pointer controlled by keyboard arrow keys.

リンクをキーボードの矢印キーで操作できるバーチャルポインタを使用してナビゲーションを可能にするChrome拡張機能です。

## Table of Contents / 目次

- [Features / 特徴](#features--特徴)
- [Installation / インストール](#installation--インストール)
- [Usage / 使用方法](#usage--使用方法)
- [Development / 開発](#development--開発)
- [License / ライセンス](#license--ライセンス)

## Features / 特徴

- Navigate through links using keyboard arrow keys.
- Virtual pointer overlays on the web page.
- Highlights the most relevant link based on pointer movement.
- Customizable settings for link selection behavior.

- リンクをキーボードの矢印キーでナビゲート
- ウェブページ上にバーチャルポインタをオーバーレイ表示
- ポインタの動きに基づいて最も関連するリンクをハイライト
- リンク選択動作のカスタマイズ可能な設定

## Installation / インストール

1. Clone the repository:
   リポジトリをクローン:
   ```sh
   git clone https://github.com/yourusername/virtual-pointer-navigation.git
   ```
2. Open Chrome and go to `chrome://extensions/`.
   Chromeを開き、`chrome://extensions/`にアクセス。
3. Enable "Developer mode" in the top right corner.
   右上の「デベロッパーモード」を有効にします。
4. Click "Load unpacked" and select the cloned repository folder.
   「パッケージ化されていない拡張機能を読み込む」をクリックし、クローンしたリポジトリフォルダを選択します。

## Usage / 使用方法

1. Navigate to any web page with links.
   リンクが含まれる任意のウェブページにアクセスします。
2. Use the arrow keys to move the virtual pointer.
   矢印キーを使用してバーチャルポインタを移動させます。
3. The closest link in the pointer's direction will be highlighted.
   ポインタの方向に最も近いリンクがハイライトされます。
4. Press `Enter` to navigate to the highlighted link or move the pointer to the link center.
   `Enter`キーを押して、ハイライトされたリンクに移動するか、ポインタをリンクの中心に移動します。

## Development / 開発

### File Structure / ファイル構成

- `manifest.json` - Chrome extension manifest file.
- `background.js` - Background script for the extension.
- `content.js` - Main script that runs in the context of the web page.
- `popup.html` - HTML for the extension's popup UI.
- `popup.js` - JavaScript for the extension's popup UI.
- `icons/` - Icons for the extension.

- `manifest.json` - Chrome拡張機能のマニフェストファイル。
- `background.js` - 拡張機能のバックグラウンドスクリプト。
- `content.js` - ウェブページのコンテキストで実行されるメインスクリプト。
- `popup.html` - 拡張機能のポップアップUIのHTML。
- `popup.js` - 拡張機能のポップアップUIのJavaScript。
- `icons/` - 拡張機能のアイコン。

### Building and Running / ビルドと実行

1. Make your changes to the code.
   コードに変更を加えます。
2. Reload the extension in Chrome by clicking the "Reload" button on the `chrome://extensions/` page.
   `chrome://extensions/`ページで「リロード」ボタンをクリックして拡張機能をリロードします。
3. Test the extension by navigating to web pages and using the arrow keys to interact with links.
   ウェブページに移動し、矢印キーを使用してリンクとやり取りすることで拡張機能をテストします。


## License / ライセンス

This project is licensed under the MIT License. See the [LICENSE](LICENSE) file for details.

このプロジェクトはMITライセンスの下でライセンスされています。詳細については[LICENSE](LICENSE)ファイルを参照してください。
