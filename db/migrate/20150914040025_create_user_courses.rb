class CreateUserCourses < ActiveRecord::Migration
  def change
    create_table :user_courses do |t|
      t.boolean :active, default: 1
      t.integer :user_id
      t.integer :supervisor_id
      t.integer :leader_id
      t.integer :course_id
      
      t.timestamps null: false
    end
  end
end
