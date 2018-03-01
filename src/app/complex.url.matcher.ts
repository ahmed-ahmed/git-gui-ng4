/**
 * Copyright (c) Matan Shukry
 * All rights reserved.
 * https://gist.github.com/matanshukry/22fae5dba9c307baf0f364a9c9f7c115
 */

import { UrlSegment, UrlSegmentGroup, Route } from '@angular/router';

// export type UrlMatchResult = {
    // consumed: UrlSegment[]; posParams?: { [name: string]: UrlSegment };
// };
export function ComplexUrlMatcher(paramName: string, regex: RegExp) {
    return (
        segments: UrlSegment[],
        segmentGroup: UrlSegmentGroup,
        route: Route) => {

        const parts = [regex];
        const posParams: { [key: string]: UrlSegment } = {};
        const consumed: UrlSegment[] = [];

        let currentIndex = 0;

        for (let i = 0; i < parts.length; ++i) {
            if (currentIndex >= segments.length) {
                return null;
            }
            const current = segments[currentIndex];

            const part = parts[i];
            if (!part.test(current.path)) {
                return null;
            }

            posParams[paramName] = current;
            consumed.push(current);
            currentIndex++;
        }

        if (route.pathMatch === 'full' &&
            (segmentGroup.hasChildren() || currentIndex < segments.length)) {
            return null;
        }

        return { consumed, posParams };
    }
}
