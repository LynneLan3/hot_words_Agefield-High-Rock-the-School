export const GUIDE_STATUSES = [
	'pre-release',
	'confirmed',
	'verified',
	'needs-verification',
] as const;

export type GuideStatusValue = (typeof GUIDE_STATUSES)[number];

export const STATUS_LABELS: Record<GuideStatusValue, string> = {
	'pre-release': 'Pre-release',
	confirmed: 'Confirmed',
	verified: 'Verified',
	'needs-verification': 'Needs Verification',
};
