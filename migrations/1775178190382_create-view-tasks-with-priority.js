/**
 * @type {import('node-pg-migrate').ColumnDefinitions | undefined}
 */
export const shorthands = undefined;

/**
 * @param pgm {import('node-pg-migrate').MigrationBuilder}
 * @param run {() => void | undefined}
 * @returns {Promise<void> | void}
 */
export const up = (pgm) => {
    pgm.sql(`
        CREATE VIEW vw_tasks_with_priority AS
        SELECT 
        t.id, t.title, t.description, t.due_date, t.is_finished,
        json_build_object('id', p.id, 'name', p.name) AS priority,
        t.priority_id
      FROM tasks t
      JOIN priorities p ON t.priority_id = p.id;    
    `);
};

/**
 * @param pgm {import('node-pg-migrate').MigrationBuilder}
 * @param run {() => void | undefined}
 * @returns {Promise<void> | void}
 */
export const down = (pgm) => {
    pgm.sql(`DROP VIEW IF EXISTS vw_tasks_with_priority;`);
};
