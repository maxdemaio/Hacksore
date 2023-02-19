import { WorkflowRunCompletedEvent } from "@octokit/webhooks-types";
/// this doesnt exist now but could perhaps be a thing in the future
import { defineWebhook } from "webhookthing";

// TS allows me to have good typesafety over the payload
const payload: WorkflowRunCompletedEvent = {
  action: "completed",
  workflow_run: {
    id: 4211981566,
    name: "Build and Deploy (fails)",
    node_id: "WFR_kwLOHDgTzs77Dbz-",
    head_branch: "main",
    head_sha: "258e1650b4f7ce64d617419e3e0f14c9624ee6d8",
    path: ".github/workflows/failed.yaml",
    display_title: "Build and Deploy (fails)",
    run_number: 50,
    event: "workflow_dispatch",
    status: "completed",
    conclusion: "failure",
    workflow_id: 38275286,
    check_suite_id: 11064411110,
    check_suite_node_id: "CS_kwDOHDgTzs8AAAACk32D5g",
    url: "https://api.github.com/repos/Hacksore/test/actions/runs/4211981566",
    html_url: "https://github.com/Hacksore/test/actions/runs/4211981566",
    pull_requests: [],
    created_at: "2023-02-18T16:09:58Z",
    updated_at: "2023-02-18T16:10:16Z",
    actor: {
      login: "Hacksore",
      id: 996134,
      node_id: "MDQ6VXNlcjk5NjEzNA==",
      avatar_url: "https://avatars.githubusercontent.com/u/996134?v=4",
      gravatar_id: "",
      url: "https://api.github.com/users/Hacksore",
      html_url: "https://github.com/Hacksore",
      followers_url: "https://api.github.com/users/Hacksore/followers",
      following_url:
        "https://api.github.com/users/Hacksore/following{/other_user}",
      gists_url: "https://api.github.com/users/Hacksore/gists{/gist_id}",
      starred_url:
        "https://api.github.com/users/Hacksore/starred{/owner}{/repo}",
      subscriptions_url: "https://api.github.com/users/Hacksore/subscriptions",
      organizations_url: "https://api.github.com/users/Hacksore/orgs",
      repos_url: "https://api.github.com/users/Hacksore/repos",
      events_url: "https://api.github.com/users/Hacksore/events{/privacy}",
      received_events_url:
        "https://api.github.com/users/Hacksore/received_events",
      type: "User",
      site_admin: false,
    },
    run_attempt: 1,
    referenced_workflows: [],
    run_started_at: "2023-02-18T16:09:58Z",
    triggering_actor: {
      login: "Hacksore",
      id: 996134,
      node_id: "MDQ6VXNlcjk5NjEzNA==",
      avatar_url: "https://avatars.githubusercontent.com/u/996134?v=4",
      gravatar_id: "",
      url: "https://api.github.com/users/Hacksore",
      html_url: "https://github.com/Hacksore",
      followers_url: "https://api.github.com/users/Hacksore/followers",
      following_url:
        "https://api.github.com/users/Hacksore/following{/other_user}",
      gists_url: "https://api.github.com/users/Hacksore/gists{/gist_id}",
      starred_url:
        "https://api.github.com/users/Hacksore/starred{/owner}{/repo}",
      subscriptions_url: "https://api.github.com/users/Hacksore/subscriptions",
      organizations_url: "https://api.github.com/users/Hacksore/orgs",
      repos_url: "https://api.github.com/users/Hacksore/repos",
      events_url: "https://api.github.com/users/Hacksore/events{/privacy}",
      received_events_url:
        "https://api.github.com/users/Hacksore/received_events",
      type: "User",
      site_admin: false,
    },
    jobs_url:
      "https://api.github.com/repos/Hacksore/test/actions/runs/4211981566/jobs",
    logs_url:
      "https://api.github.com/repos/Hacksore/test/actions/runs/4211981566/logs",
    check_suite_url:
      "https://api.github.com/repos/Hacksore/test/check-suites/11064411110",
    artifacts_url:
      "https://api.github.com/repos/Hacksore/test/actions/runs/4211981566/artifacts",
    cancel_url:
      "https://api.github.com/repos/Hacksore/test/actions/runs/4211981566/cancel",
    rerun_url:
      "https://api.github.com/repos/Hacksore/test/actions/runs/4211981566/rerun",
    previous_attempt_url: null,
    workflow_url:
      "https://api.github.com/repos/Hacksore/test/actions/workflows/38275286",
    head_commit: {
      id: "258e1650b4f7ce64d617419e3e0f14c9624ee6d8",
      tree_id: "d3585b10f6aec77ba785e98c7e6d4a5ea1ab9b08",
      message: "Update success.yaml",
      timestamp: "2022-11-04T23:01:38Z",
      author: {
        name: "Sean Boult",
        email: "996134+Hacksore@users.noreply.github.com",
      },
      committer: {
        name: "GitHub",
        email: "noreply@github.com",
      },
    },
    repository: {
      id: 473437134,
      node_id: "R_kgDOHDgTzg",
      name: "test",
      full_name: "Hacksore/test",
      private: false,
      owner: {
        login: "Hacksore",
        id: 996134,
        node_id: "MDQ6VXNlcjk5NjEzNA==",
        avatar_url: "https://avatars.githubusercontent.com/u/996134?v=4",
        gravatar_id: "",
        url: "https://api.github.com/users/Hacksore",
        html_url: "https://github.com/Hacksore",
        followers_url: "https://api.github.com/users/Hacksore/followers",
        following_url:
          "https://api.github.com/users/Hacksore/following{/other_user}",
        gists_url: "https://api.github.com/users/Hacksore/gists{/gist_id}",
        starred_url:
          "https://api.github.com/users/Hacksore/starred{/owner}{/repo}",
        subscriptions_url:
          "https://api.github.com/users/Hacksore/subscriptions",
        organizations_url: "https://api.github.com/users/Hacksore/orgs",
        repos_url: "https://api.github.com/users/Hacksore/repos",
        events_url: "https://api.github.com/users/Hacksore/events{/privacy}",
        received_events_url:
          "https://api.github.com/users/Hacksore/received_events",
        type: "User",
        site_admin: false,
      },
      html_url: "https://github.com/Hacksore/test",
      description: null,
      fork: false,
      url: "https://api.github.com/repos/Hacksore/test",
      forks_url: "https://api.github.com/repos/Hacksore/test/forks",
      keys_url: "https://api.github.com/repos/Hacksore/test/keys{/key_id}",
      collaborators_url:
        "https://api.github.com/repos/Hacksore/test/collaborators{/collaborator}",
      teams_url: "https://api.github.com/repos/Hacksore/test/teams",
      hooks_url: "https://api.github.com/repos/Hacksore/test/hooks",
      issue_events_url:
        "https://api.github.com/repos/Hacksore/test/issues/events{/number}",
      events_url: "https://api.github.com/repos/Hacksore/test/events",
      assignees_url:
        "https://api.github.com/repos/Hacksore/test/assignees{/user}",
      branches_url:
        "https://api.github.com/repos/Hacksore/test/branches{/branch}",
      tags_url: "https://api.github.com/repos/Hacksore/test/tags",
      blobs_url: "https://api.github.com/repos/Hacksore/test/git/blobs{/sha}",
      git_tags_url: "https://api.github.com/repos/Hacksore/test/git/tags{/sha}",
      git_refs_url: "https://api.github.com/repos/Hacksore/test/git/refs{/sha}",
      trees_url: "https://api.github.com/repos/Hacksore/test/git/trees{/sha}",
      statuses_url: "https://api.github.com/repos/Hacksore/test/statuses/{sha}",
      languages_url: "https://api.github.com/repos/Hacksore/test/languages",
      stargazers_url: "https://api.github.com/repos/Hacksore/test/stargazers",
      contributors_url:
        "https://api.github.com/repos/Hacksore/test/contributors",
      subscribers_url: "https://api.github.com/repos/Hacksore/test/subscribers",
      subscription_url:
        "https://api.github.com/repos/Hacksore/test/subscription",
      commits_url: "https://api.github.com/repos/Hacksore/test/commits{/sha}",
      git_commits_url:
        "https://api.github.com/repos/Hacksore/test/git/commits{/sha}",
      comments_url:
        "https://api.github.com/repos/Hacksore/test/comments{/number}",
      issue_comment_url:
        "https://api.github.com/repos/Hacksore/test/issues/comments{/number}",
      contents_url:
        "https://api.github.com/repos/Hacksore/test/contents/{+path}",
      compare_url:
        "https://api.github.com/repos/Hacksore/test/compare/{base}...{head}",
      merges_url: "https://api.github.com/repos/Hacksore/test/merges",
      archive_url:
        "https://api.github.com/repos/Hacksore/test/{archive_format}{/ref}",
      downloads_url: "https://api.github.com/repos/Hacksore/test/downloads",
      issues_url: "https://api.github.com/repos/Hacksore/test/issues{/number}",
      pulls_url: "https://api.github.com/repos/Hacksore/test/pulls{/number}",
      milestones_url:
        "https://api.github.com/repos/Hacksore/test/milestones{/number}",
      notifications_url:
        "https://api.github.com/repos/Hacksore/test/notifications{?since,all,participating}",
      labels_url: "https://api.github.com/repos/Hacksore/test/labels{/name}",
      releases_url: "https://api.github.com/repos/Hacksore/test/releases{/id}",
      deployments_url: "https://api.github.com/repos/Hacksore/test/deployments",
    },
    head_repository: {
      id: 473437134,
      node_id: "R_kgDOHDgTzg",
      name: "test",
      full_name: "Hacksore/test",
      private: false,
      owner: {
        login: "Hacksore",
        id: 996134,
        node_id: "MDQ6VXNlcjk5NjEzNA==",
        avatar_url: "https://avatars.githubusercontent.com/u/996134?v=4",
        gravatar_id: "",
        url: "https://api.github.com/users/Hacksore",
        html_url: "https://github.com/Hacksore",
        followers_url: "https://api.github.com/users/Hacksore/followers",
        following_url:
          "https://api.github.com/users/Hacksore/following{/other_user}",
        gists_url: "https://api.github.com/users/Hacksore/gists{/gist_id}",
        starred_url:
          "https://api.github.com/users/Hacksore/starred{/owner}{/repo}",
        subscriptions_url:
          "https://api.github.com/users/Hacksore/subscriptions",
        organizations_url: "https://api.github.com/users/Hacksore/orgs",
        repos_url: "https://api.github.com/users/Hacksore/repos",
        events_url: "https://api.github.com/users/Hacksore/events{/privacy}",
        received_events_url:
          "https://api.github.com/users/Hacksore/received_events",
        type: "User",
        site_admin: false,
      },
      html_url: "https://github.com/Hacksore/test",
      description: null,
      fork: false,
      url: "https://api.github.com/repos/Hacksore/test",
      forks_url: "https://api.github.com/repos/Hacksore/test/forks",
      keys_url: "https://api.github.com/repos/Hacksore/test/keys{/key_id}",
      collaborators_url:
        "https://api.github.com/repos/Hacksore/test/collaborators{/collaborator}",
      teams_url: "https://api.github.com/repos/Hacksore/test/teams",
      hooks_url: "https://api.github.com/repos/Hacksore/test/hooks",
      issue_events_url:
        "https://api.github.com/repos/Hacksore/test/issues/events{/number}",
      events_url: "https://api.github.com/repos/Hacksore/test/events",
      assignees_url:
        "https://api.github.com/repos/Hacksore/test/assignees{/user}",
      branches_url:
        "https://api.github.com/repos/Hacksore/test/branches{/branch}",
      tags_url: "https://api.github.com/repos/Hacksore/test/tags",
      blobs_url: "https://api.github.com/repos/Hacksore/test/git/blobs{/sha}",
      git_tags_url: "https://api.github.com/repos/Hacksore/test/git/tags{/sha}",
      git_refs_url: "https://api.github.com/repos/Hacksore/test/git/refs{/sha}",
      trees_url: "https://api.github.com/repos/Hacksore/test/git/trees{/sha}",
      statuses_url: "https://api.github.com/repos/Hacksore/test/statuses/{sha}",
      languages_url: "https://api.github.com/repos/Hacksore/test/languages",
      stargazers_url: "https://api.github.com/repos/Hacksore/test/stargazers",
      contributors_url:
        "https://api.github.com/repos/Hacksore/test/contributors",
      subscribers_url: "https://api.github.com/repos/Hacksore/test/subscribers",
      subscription_url:
        "https://api.github.com/repos/Hacksore/test/subscription",
      commits_url: "https://api.github.com/repos/Hacksore/test/commits{/sha}",
      git_commits_url:
        "https://api.github.com/repos/Hacksore/test/git/commits{/sha}",
      comments_url:
        "https://api.github.com/repos/Hacksore/test/comments{/number}",
      issue_comment_url:
        "https://api.github.com/repos/Hacksore/test/issues/comments{/number}",
      contents_url:
        "https://api.github.com/repos/Hacksore/test/contents/{+path}",
      compare_url:
        "https://api.github.com/repos/Hacksore/test/compare/{base}...{head}",
      merges_url: "https://api.github.com/repos/Hacksore/test/merges",
      archive_url:
        "https://api.github.com/repos/Hacksore/test/{archive_format}{/ref}",
      downloads_url: "https://api.github.com/repos/Hacksore/test/downloads",
      issues_url: "https://api.github.com/repos/Hacksore/test/issues{/number}",
      pulls_url: "https://api.github.com/repos/Hacksore/test/pulls{/number}",
      milestones_url:
        "https://api.github.com/repos/Hacksore/test/milestones{/number}",
      notifications_url:
        "https://api.github.com/repos/Hacksore/test/notifications{?since,all,participating}",
      labels_url: "https://api.github.com/repos/Hacksore/test/labels{/name}",
      releases_url: "https://api.github.com/repos/Hacksore/test/releases{/id}",
      deployments_url: "https://api.github.com/repos/Hacksore/test/deployments",
    },
  },
  workflow: {
    id: 38275286,
    node_id: "W_kwDOHDgTzs4CSAjW",
    name: "Build and Deploy (fails)",
    path: ".github/workflows/failed.yaml",
    state: "active",
    created_at: "2022-10-23T23:49:36.000Z",
    updated_at: "2022-10-24T13:49:18.000Z",
    url: "https://api.github.com/repos/Hacksore/test/actions/workflows/38275286",
    html_url:
      "https://github.com/Hacksore/test/blob/main/.github/workflows/failed.yaml",
    badge_url:
      "https://github.com/Hacksore/test/workflows/Build%20and%20Deploy%20(fails)/badge.svg",
  },
  repository: {
    id: 473437134,
    node_id: "R_kgDOHDgTzg",
    name: "test",
    full_name: "Hacksore/test",
    private: false,
    owner: {
      login: "Hacksore",
      id: 996134,
      node_id: "MDQ6VXNlcjk5NjEzNA==",
      avatar_url: "https://avatars.githubusercontent.com/u/996134?v=4",
      gravatar_id: "",
      url: "https://api.github.com/users/Hacksore",
      html_url: "https://github.com/Hacksore",
      followers_url: "https://api.github.com/users/Hacksore/followers",
      following_url:
        "https://api.github.com/users/Hacksore/following{/other_user}",
      gists_url: "https://api.github.com/users/Hacksore/gists{/gist_id}",
      starred_url:
        "https://api.github.com/users/Hacksore/starred{/owner}{/repo}",
      subscriptions_url: "https://api.github.com/users/Hacksore/subscriptions",
      organizations_url: "https://api.github.com/users/Hacksore/orgs",
      repos_url: "https://api.github.com/users/Hacksore/repos",
      events_url: "https://api.github.com/users/Hacksore/events{/privacy}",
      received_events_url:
        "https://api.github.com/users/Hacksore/received_events",
      type: "User",
      site_admin: false,
    },
    html_url: "https://github.com/Hacksore/test",
    description: null,
    fork: false,
    url: "https://api.github.com/repos/Hacksore/test",
    forks_url: "https://api.github.com/repos/Hacksore/test/forks",
    keys_url: "https://api.github.com/repos/Hacksore/test/keys{/key_id}",
    collaborators_url:
      "https://api.github.com/repos/Hacksore/test/collaborators{/collaborator}",
    teams_url: "https://api.github.com/repos/Hacksore/test/teams",
    hooks_url: "https://api.github.com/repos/Hacksore/test/hooks",
    issue_events_url:
      "https://api.github.com/repos/Hacksore/test/issues/events{/number}",
    events_url: "https://api.github.com/repos/Hacksore/test/events",
    assignees_url:
      "https://api.github.com/repos/Hacksore/test/assignees{/user}",
    branches_url:
      "https://api.github.com/repos/Hacksore/test/branches{/branch}",
    tags_url: "https://api.github.com/repos/Hacksore/test/tags",
    blobs_url: "https://api.github.com/repos/Hacksore/test/git/blobs{/sha}",
    git_tags_url: "https://api.github.com/repos/Hacksore/test/git/tags{/sha}",
    git_refs_url: "https://api.github.com/repos/Hacksore/test/git/refs{/sha}",
    trees_url: "https://api.github.com/repos/Hacksore/test/git/trees{/sha}",
    statuses_url: "https://api.github.com/repos/Hacksore/test/statuses/{sha}",
    languages_url: "https://api.github.com/repos/Hacksore/test/languages",
    stargazers_url: "https://api.github.com/repos/Hacksore/test/stargazers",
    contributors_url: "https://api.github.com/repos/Hacksore/test/contributors",
    subscribers_url: "https://api.github.com/repos/Hacksore/test/subscribers",
    subscription_url: "https://api.github.com/repos/Hacksore/test/subscription",
    commits_url: "https://api.github.com/repos/Hacksore/test/commits{/sha}",
    git_commits_url:
      "https://api.github.com/repos/Hacksore/test/git/commits{/sha}",
    comments_url:
      "https://api.github.com/repos/Hacksore/test/comments{/number}",
    issue_comment_url:
      "https://api.github.com/repos/Hacksore/test/issues/comments{/number}",
    contents_url: "https://api.github.com/repos/Hacksore/test/contents/{+path}",
    compare_url:
      "https://api.github.com/repos/Hacksore/test/compare/{base}...{head}",
    merges_url: "https://api.github.com/repos/Hacksore/test/merges",
    archive_url:
      "https://api.github.com/repos/Hacksore/test/{archive_format}{/ref}",
    downloads_url: "https://api.github.com/repos/Hacksore/test/downloads",
    issues_url: "https://api.github.com/repos/Hacksore/test/issues{/number}",
    pulls_url: "https://api.github.com/repos/Hacksore/test/pulls{/number}",
    milestones_url:
      "https://api.github.com/repos/Hacksore/test/milestones{/number}",
    notifications_url:
      "https://api.github.com/repos/Hacksore/test/notifications{?since,all,participating}",
    labels_url: "https://api.github.com/repos/Hacksore/test/labels{/name}",
    releases_url: "https://api.github.com/repos/Hacksore/test/releases{/id}",
    deployments_url: "https://api.github.com/repos/Hacksore/test/deployments",
    created_at: "2022-03-24T03:00:14Z",
    updated_at: "2022-03-24T03:00:14Z",
    pushed_at: "2022-11-04T23:01:38Z",
    git_url: "git://github.com/Hacksore/test.git",
    ssh_url: "git@github.com:Hacksore/test.git",
    clone_url: "https://github.com/Hacksore/test.git",
    svn_url: "https://github.com/Hacksore/test",
    homepage: null,
    size: 20,
    stargazers_count: 0,
    watchers_count: 0,
    language: null,
    has_issues: true,
    has_projects: true,
    has_downloads: true,
    has_wiki: true,
    has_pages: false,
    has_discussions: false,
    forks_count: 1,
    mirror_url: null,
    archived: false,
    disabled: false,
    open_issues_count: 0,
    license: null,
    allow_forking: true,
    is_template: false,
    web_commit_signoff_required: false,
    topics: [],
    visibility: "public",
    forks: 1,
    open_issues: 0,
    watchers: 0,
    default_branch: "main",
  },
  sender: {
    login: "Hacksore",
    id: 996134,
    node_id: "MDQ6VXNlcjk5NjEzNA==",
    avatar_url: "https://avatars.githubusercontent.com/u/996134?v=4",
    gravatar_id: "",
    url: "https://api.github.com/users/Hacksore",
    html_url: "https://github.com/Hacksore",
    followers_url: "https://api.github.com/users/Hacksore/followers",
    following_url:
      "https://api.github.com/users/Hacksore/following{/other_user}",
    gists_url: "https://api.github.com/users/Hacksore/gists{/gist_id}",
    starred_url: "https://api.github.com/users/Hacksore/starred{/owner}{/repo}",
    subscriptions_url: "https://api.github.com/users/Hacksore/subscriptions",
    organizations_url: "https://api.github.com/users/Hacksore/orgs",
    repos_url: "https://api.github.com/users/Hacksore/repos",
    events_url: "https://api.github.com/users/Hacksore/events{/privacy}",
    received_events_url:
      "https://api.github.com/users/Hacksore/received_events",
    type: "User",
    site_admin: false,
  },
};

export default defineWebhook({
  payload,
  headers: {
    "x-github-event": "workflow_run",
    // this should be default lol
    "Content-Type": "application/json",
  }
})