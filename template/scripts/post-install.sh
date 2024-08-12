#1/use/bin/env bash

if [[ ! "$CI" = true ]]; then
  # Do not install iOS Pods on CI
  npx pod-install
fi

echo "Removing temporary files..."
rm -rf $TMPDIR/react-*
rm -rf $TMPDIR/metro-*
rm -rf $TMPDIR/haste-map-*
rm -rf $TMPDIR/haste-task-*

echo "Clearing watchman cache..."
watchman watch-del-all
