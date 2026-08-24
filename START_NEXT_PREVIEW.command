#!/bin/zsh

cd "$(dirname "$0")"

if ! command -v node >/dev/null 2>&1; then
  echo "Node.jsが見つかりません。ブラウザでダウンロードページを開きます。"
  open "https://nodejs.org/ja/download"
  echo "Node.jsをインストール後、もう一度このファイルを開いてください。"
  read -r "?Enterキーで閉じます。"
  exit 1
fi

if ! node -e 'const [major, minor] = process.versions.node.split(".").map(Number); process.exit(major > 20 || (major === 20 && minor >= 9) ? 0 : 1)'; then
  echo "現在のNode.js $(node -v) では起動できません。20.9.0以上へ更新してください。"
  echo "nodebrewを使っている場合：nodebrew install-binary v24.19.0 && nodebrew use v24.19.0"
  open "https://nodejs.org/en/download/"
  read -r "?Enterキーで閉じます。"
  exit 1
fi

if [ ! -d "node_modules" ]; then
  echo "初回設定を行っています。数分かかる場合があります。"
  if ! npm install; then
    echo "初回設定に失敗しました。表示されたエラー内容をご確認ください。"
    read -r "?Enterキーで閉じます。"
    exit 1
  fi
fi

echo "SLPのNext.jsプレビューを起動しています。ブラウザが開くまでお待ちください。"
npm run dev -- --hostname 127.0.0.1 --port 3000 &
DEV_SERVER_PID=$!
trap 'kill "$DEV_SERVER_PID" 2>/dev/null' EXIT INT TERM

for attempt in {1..180}; do
  if curl --silent --fail "http://127.0.0.1:3000" >/dev/null 2>&1; then
    echo "起動しました。ブラウザを開きます。"
    open "http://127.0.0.1:3000"
    wait "$DEV_SERVER_PID"
    exit $?
  fi

  if ! kill -0 "$DEV_SERVER_PID" 2>/dev/null; then
    wait "$DEV_SERVER_PID"
    echo "プレビューを起動できませんでした。上に表示されたエラー内容をご確認ください。"
    read -r "?Enterキーで閉じます。"
    exit 1
  fi

  sleep 1
done

echo "起動確認がタイムアウトしました。"
read -r "?Enterキーで閉じます。"
exit 1
