// Copyright 2026, Command Line Inc.
// SPDX-License-Identifier: Apache-2.0

import { isBlank } from "@/util/util";

// bookmarks are keyed by connection+path so the same path on different connections doesn't collide
export function makeFileBookmarkId(connection: string, path: string): string {
    return isBlank(connection) ? path : `${connection}|${path}`;
}
