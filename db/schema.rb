# This file is auto-generated from the current state of the database. Instead
# of editing this file, please use the migrations feature of Active Record to
# incrementally modify your database, and then regenerate this schema definition.
#
# Note that this schema.rb definition is the authoritative source for your
# database schema. If you need to create the application database on another
# system, you should be using db:schema:load, not running all the migrations
# from scratch. The latter is a flawed and unsustainable approach (the more migrations
# you'll amass, the slower it'll run and the greater likelihood for issues).
#
# It's strongly recommended that you check this file into your version control system.

ActiveRecord::Schema.define(version: 20161213032300) do

  # These are extensions that must be enabled in order to support this database
  enable_extension "plpgsql"

  create_table "approverships", force: :cascade do |t|
    t.integer  "campaign_id", null: false
    t.integer  "approver_id", null: false
    t.datetime "created_at",  null: false
    t.datetime "updated_at",  null: false
  end

  create_table "campaigns", force: :cascade do |t|
    t.string   "title",      null: false
    t.integer  "manager_id", null: false
    t.datetime "created_at", null: false
    t.datetime "updated_at", null: false
    t.string   "image_url"
  end

  create_table "executions", force: :cascade do |t|
    t.string   "title",       null: false
    t.string   "media_type",  null: false
    t.integer  "creator_id",  null: false
    t.integer  "campaign_id", null: false
    t.boolean  "approved"
    t.string   "format"
    t.text     "info"
    t.datetime "created_at",  null: false
    t.datetime "updated_at",  null: false
  end

  create_table "feedbacks", force: :cascade do |t|
    t.text     "comments"
    t.string   "link_url"
    t.integer  "posting_id",   null: false
    t.integer  "creator_id",   null: false
    t.datetime "created_at",   null: false
    t.datetime "updated_at",   null: false
    t.string   "creator_name"
  end

  create_table "memberships", force: :cascade do |t|
    t.integer  "campaign_id", null: false
    t.integer  "member_id",   null: false
    t.datetime "created_at",  null: false
    t.datetime "updated_at",  null: false
  end

  create_table "postings", force: :cascade do |t|
    t.string   "title",        null: false
    t.text     "comments"
    t.integer  "execution_id", null: false
    t.string   "link_url"
    t.datetime "created_at",   null: false
    t.datetime "updated_at",   null: false
  end

  create_table "users", force: :cascade do |t|
    t.string   "username"
    t.string   "password_digest"
    t.string   "session_token"
    t.datetime "created_at",      null: false
    t.datetime "updated_at",      null: false
  end

end
