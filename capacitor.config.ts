/*
# -----------------------------------------------------------------------------
# This file is part of The cold-store app.
#
# Copyright (c) 2024 Mahmood Maher
#
# Licensed under the MIT License. See the LICENSE file in the project root for
# full license information.
# -----------------------------------------------------------------------------
# This file is used by the build system to adjust CSS and JS output to support the specified browsers below.
*/
import { CapacitorConfig } from '@capacitor/cli';

const config: CapacitorConfig = {
  appId: 'io.ionic.starter',
  appName: 'coldstore-app',
  webDir: 'www',
  bundledWebRuntime: false
};

export default config;
