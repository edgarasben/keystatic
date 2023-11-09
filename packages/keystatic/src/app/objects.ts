import {
  UseStore,
  createStore,
  del as _del,
  get as _get,
  set as _set,
} from 'idb-keyval';
import { TreeNode } from './trees';

let store: UseStore;

function getStore() {
  if (!store) {
    store = createStore('keystatic', 'items');
  }
  return store;
}

export async function garbageCollectGitObjects(roots: string[]) {}

export function setBlobToPersistedCache(sha: string, val: Uint8Array) {
  return setObject(sha, val);
}

export async function setTreeToPersistedCache(
  sha: string,
  children: Map<string, TreeNode>
) {
  const entries: {
    path: string;
    sha: string;
    mode: string;
  }[] = [];
  for (const [pathPart, entry] of children) {
    entries.push({
      path: pathPart,
      mode: entry.entry.mode,
      sha: entry.entry.sha,
    });
  }
  return setObject(sha, entries).then(())
}

// the as anys are because the indexeddb types dont't accept readonly arrays

function setObject(key: string, val: unknown) {
  return _set(key, val, getStore());
}

function delObject(key: string) {
  return _del(key, getStore());
}

function getObject(key: string): Promise<unknown> {
  return _get(key, getStore());
}
