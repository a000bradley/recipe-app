CREATE TABLE `recipes` (
	`id` integer PRIMARY KEY NOT NULL,
	`title` text NOT NULL,
	`ingredients` text,
	`method` text,
	`created_at` text DEFAULT CURRENT_TIMESTAMP NOT NULL
);
--> statement-breakpoint
ALTER TABLE users ADD `extra` text;