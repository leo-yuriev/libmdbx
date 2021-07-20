/*
@licstart  The following is the entire license notice for the
JavaScript code in this file.

Copyright (C) 1997-2019 by Dimitri van Heesch

This program is free software; you can redistribute it and/or modify
it under the terms of version 2 of the GNU General Public License as published by
the Free Software Foundation

This program is distributed in the hope that it will be useful,
but WITHOUT ANY WARRANTY; without even the implied warranty of
MERCHANTABILITY or FITNESS FOR A PARTICULAR PURPOSE. See the
GNU General Public License for more details.

You should have received a copy of the GNU General Public License along
with this program; if not, write to the Free Software Foundation, Inc.,
51 Franklin Street, Fifth Floor, Boston, MA 02110-1301 USA.

@licend  The above is the entire license notice
for the JavaScript code in this file
*/
var NAVTREE =
[
  [ "libmdbx", "index.html", [
    [ "Overall", "index.html", [
      [ "Brief", "index.html#brief", null ],
      [ "Table of Contents", "index.html#toc", null ],
      [ "MithrilDB", "index.html#MithrilDB", null ],
      [ "History", "index.html#autotoc_md1", [
        [ "Acknowledgments", "index.html#autotoc_md2", null ]
      ] ],
      [ "Contributors", "index.html#autotoc_md3", null ],
      [ "License", "index.html#autotoc_md4", null ]
    ] ],
    [ "Introduction", "intro.html", [
      [ "Characteristics", "intro.html#characteristics", [
        [ "Preface", "intro.html#preface", null ],
        [ "Features", "intro.html#autotoc_md5", null ],
        [ "Limitations", "intro.html#autotoc_md6", null ],
        [ "Gotchas", "intro.html#autotoc_md7", null ],
        [ "Comparison with other databases", "intro.html#autotoc_md8", null ]
      ] ],
      [ "Improvements beyond LMDB", "intro.html#autotoc_md9", [
        [ "Added Features", "intro.html#autotoc_md10", null ],
        [ "Other fixes and specifics", "intro.html#autotoc_md11", null ]
      ] ],
      [ "Restrictions & Caveats", "intro.html#restrictions", [
        [ "Troubleshooting the LCK-file", "intro.html#autotoc_md12", null ],
        [ "Remote filesystems", "intro.html#autotoc_md13", null ],
        [ "Child processes", "intro.html#autotoc_md14", null ],
        [ "Read-only mode", "intro.html#autotoc_md15", null ],
        [ "One thread - One transaction", "intro.html#autotoc_md16", null ],
        [ "Do not open twice", "intro.html#autotoc_md17", null ],
        [ "Long-lived read transactions", "intro.html#long-lived-read", null ],
        [ "Large data items and huge transactions", "intro.html#autotoc_md18", null ],
        [ "Space reservation", "intro.html#autotoc_md19", null ]
      ] ],
      [ "Performance comparison", "intro.html#performance", [
        [ "Integral performance", "intro.html#autotoc_md20", null ],
        [ "Read Scalability", "intro.html#autotoc_md22", null ],
        [ "Sync-write mode", "intro.html#autotoc_md24", null ],
        [ "Lazy-write mode", "intro.html#autotoc_md26", null ],
        [ "Async-write mode", "intro.html#autotoc_md28", null ],
        [ "Cost comparison", "intro.html#autotoc_md30", null ]
      ] ]
    ] ],
    [ "Usage", "usage.html", [
      [ "Building & Embedding", "usage.html#getting", [
        [ "Never use tarballs nor zips automatically provided by Github !", "usage.html#autotoc_md31", null ],
        [ "Source code embedding", "usage.html#autotoc_md32", null ],
        [ "Building", "usage.html#autotoc_md33", [
          [ "Common important details", "usage.html#autotoc_md34", [
            [ "Build reproducibility", "usage.html#autotoc_md35", null ],
            [ "DSO/DLL unloading and destructors of Thread-Local-Storage objects", "usage.html#autotoc_md36", null ]
          ] ],
          [ "Linux and other platforms with GNU Make", "usage.html#autotoc_md37", null ],
          [ "FreeBSD and related platforms", "usage.html#autotoc_md38", null ],
          [ "Windows", "usage.html#autotoc_md39", null ],
          [ "Windows Subsystem for Linux", "usage.html#autotoc_md40", null ],
          [ "MacOS", "usage.html#autotoc_md41", null ],
          [ "Android", "usage.html#autotoc_md42", null ],
          [ "iOS", "usage.html#autotoc_md43", null ]
        ] ]
      ] ],
      [ "Getting started", "usage.html#starting", [
        [ "Cursors", "usage.html#Cursors", null ],
        [ "Summarizing the opening", "usage.html#autotoc_md44", null ],
        [ "Threads and processes", "usage.html#autotoc_md45", null ],
        [ "Transactions, rollbacks etc", "usage.html#autotoc_md46", null ],
        [ "Duplicate keys aka Multi-values", "usage.html#autotoc_md47", null ],
        [ "Some optimization", "usage.html#autotoc_md48", null ],
        [ "Cleaning up", "usage.html#autotoc_md49", null ],
        [ "Now read up on the full API!", "usage.html#autotoc_md50", null ]
      ] ],
      [ "Bindings", "usage.html#bindings", null ]
    ] ],
    [ "ChangeLog", "md__change_log.html", [
      [ "v0.10.2 (in development)", "md__change_log.html#autotoc_md57", [
        [ "TODO", "md__change_log.html#autotoc_md58", null ]
      ] ],
      [ "v0.10.1 at 2021-06-01", "md__change_log.html#autotoc_md59", null ],
      [ "v0.10.0 at 2021-05-09", "md__change_log.html#autotoc_md60", null ],
      [ "v0.9.3 at 2021-02-02", "md__change_log.html#autotoc_md61", null ],
      [ "v0.9.2 at 2020-11-27", "md__change_log.html#autotoc_md62", null ],
      [ "v0.9.1 2020-09-30", "md__change_log.html#autotoc_md63", null ],
      [ "v0.9.0 2020-07-31 (not a release, but API changes)", "md__change_log.html#autotoc_md64", null ],
      [ "v0.8.2 2020-07-06", "md__change_log.html#autotoc_md65", null ],
      [ "v0.8.1 2020-06-12", "md__change_log.html#autotoc_md66", null ],
      [ "v0.8.0 2020-06-05", "md__change_log.html#autotoc_md67", null ],
      [ "v0.7.0 2020-03-18", "md__change_log.html#autotoc_md68", null ],
      [ "v0.6.0 2020-01-21", "md__change_log.html#autotoc_md69", null ],
      [ "v0.5.0 2019-12-31", "md__change_log.html#autotoc_md70", null ],
      [ "v0.4.0 2019-12-02", "md__change_log.html#autotoc_md71", null ]
    ] ],
    [ "Deprecated List", "deprecated.html", null ],
    [ "Modules", "modules.html", "modules" ],
    [ "Namespaces", "namespaces.html", [
      [ "Namespace List", "namespaces.html", "namespaces_dup" ],
      [ "Namespace Members", "namespacemembers.html", [
        [ "All", "namespacemembers.html", null ],
        [ "Functions", "namespacemembers_func.html", null ],
        [ "Typedefs", "namespacemembers_type.html", null ],
        [ "Enumerations", "namespacemembers_enum.html", null ],
        [ "Enumerator", "namespacemembers_eval.html", null ]
      ] ]
    ] ],
    [ "Classes", "annotated.html", [
      [ "Class List", "annotated.html", "annotated_dup" ],
      [ "Class Index", "classes.html", null ],
      [ "Class Hierarchy", "hierarchy.html", "hierarchy" ],
      [ "Class Members", "functions.html", [
        [ "All", "functions.html", "functions_dup" ],
        [ "Functions", "functions_func.html", "functions_func" ],
        [ "Variables", "functions_vars.html", null ],
        [ "Typedefs", "functions_type.html", null ],
        [ "Enumerations", "functions_enum.html", null ],
        [ "Enumerator", "functions_eval.html", null ],
        [ "Related Functions", "functions_rela.html", null ]
      ] ]
    ] ],
    [ "Files", "files.html", [
      [ "File List", "files.html", "files_dup" ],
      [ "File Members", "globals.html", [
        [ "All", "globals.html", "globals_dup" ],
        [ "Functions", "globals_func.html", null ],
        [ "Variables", "globals_vars.html", null ],
        [ "Typedefs", "globals_type.html", null ],
        [ "Enumerations", "globals_enum.html", null ],
        [ "Enumerator", "globals_eval.html", null ],
        [ "Macros", "globals_defs.html", null ]
      ] ]
    ] ]
  ] ]
];

var NAVTREEINDEX =
[
".html",
"classmdbx_1_1env.html#ae78dc69b6b897df0ad0be4d2712f5ce7",
"group__api__macros.html#ga6d6d5e0641c1873b1adc6b077ca4b1c5",
"group__c__api.html#gga671855605968c3b1f89a72e2d7b71eb3a262cec5ffe0762dd2254fe6dd7b2e6c7",
"group__c__err.html#gab5ba1469eef28a2e09ed243b608b11ce",
"group__c__statinfo.html#ga4beb6acbc32ac5dc6114f55f86867097",
"mdbx_8h_09_09.html#a7a144dab54e3327f4465f58f9d940c41",
"structmdbx_1_1allocation__aware__details_1_1move__assign__alloc.html"
];

var SYNCONMSG = 'click to disable panel synchronisation';
var SYNCOFFMSG = 'click to enable panel synchronisation';