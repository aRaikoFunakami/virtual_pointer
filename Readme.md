

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
  

- リンクをキーボードの矢印キーでナビゲート
- ウェブページ上にバーチャルポインタをオーバーレイ表示
- ポインタの動きに基づいて最も関連するリンクをハイライト
- リンク選択動作のカスタマイズ可能な設定

## Installation / インストール

インストール
1. リポジトリをクローン:
   ```sh
   git clone https://github.com/yourusername/virtual-pointer-navigation.git
   ```
2. Chromeを開き、`chrome://extensions/`にアクセス。
3. 右上の「デベロッパーモード」を有効にします。
4. 「パッケージ化されていない拡張機能を読み込む」をクリックし、クローンしたリポジトリフォルダを選択します。

## Usage / 使用方法

使用方法
1. リンクが含まれる任意のウェブページにアクセスします。
2. 矢印キーを使用してバーチャルポインタを移動させます。
3. ポインタの方向に最も近いリンクがハイライトされます。
4. `Enter`キーを押して、ハイライトされたリンクに移動するか、ポインタをリンクの中心に移動します。

## Development / 開発

### File Structure / ファイル構成

- `manifest.json` - Chrome拡張機能のマニフェストファイル。
- `background.js` - 拡張機能のバックグラウンドスクリプト。
- `content.js` - ウェブページのコンテキストで実行されるメインスクリプト。
- `popup.html` - 拡張機能のポップアップUIのHTML。
- `popup.js` - 拡張機能のポップアップUIのJavaScript。
- `icons/` - 拡張機能のアイコン。

### Building and Running / ビルドと実行

1. コードに変更を加えます。
2. `chrome://extensions/`ページで「リロード」ボタンをクリックして拡張機能をリロードします。
3. ウェブページに移動し、矢印キーを使用してリンクとやり取りすることで拡張機能をテストします。


## License / ライセンス

This project is licensed under the MIT License. See the [LICENSE](LICENSE) file for details.

このプロジェクトはMITライセンスの下でライセンスされています。詳細については[LICENSE](LICENSE)ファイルを参照してください。
